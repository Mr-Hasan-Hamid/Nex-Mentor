-- ==============================================================================
-- CAMPUSMENTOR - SUPABASE DATABASE SCHEMA & RLS POLICIES
-- ==============================================================================

-- 1. PROFILES TABLE (Core user information linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'alumni', 'admin')),
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  timezone TEXT DEFAULT 'Asia/Kolkata',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. STUDENT PROFILES
CREATE TABLE IF NOT EXISTS public.student_profiles (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  department TEXT,
  grad_year INT,
  target_companies TEXT[] DEFAULT '{}',
  resume_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. MENTOR / ALUMNI PROFILES
CREATE TABLE IF NOT EXISTS public.mentor_profiles (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  company TEXT NOT NULL,
  job_title TEXT NOT NULL,
  domain TEXT NOT NULL,
  expertise TEXT[] DEFAULT '{}',
  years_experience INT DEFAULT 1,
  linkedin_url TEXT,
  cal_username TEXT,
  cal_event_slug TEXT DEFAULT '30min',
  is_verified BOOLEAN DEFAULT true,
  rating NUMERIC(3, 2) DEFAULT 5.0,
  total_sessions INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  cal_booking_id TEXT,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  resume_url TEXT,
  focus_areas TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  meeting_url TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. FEEDBACK TABLE
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID UNIQUE NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  coding_rating INT NOT NULL CHECK (coding_rating BETWEEN 1 AND 5),
  communication_rating INT NOT NULL CHECK (communication_rating BETWEEN 1 AND 5),
  system_design_rating INT NOT NULL CHECK (system_design_rating BETWEEN 1 AND 5),
  strengths TEXT NOT NULL,
  improvements TEXT NOT NULL,
  overall_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. LEADERBOARD VIEW
CREATE OR REPLACE VIEW public.mentor_leaderboard AS
SELECT 
  p.id AS mentor_id,
  p.full_name,
  p.avatar_url,
  mp.company,
  mp.job_title,
  mp.domain,
  mp.rating,
  mp.total_sessions,
  COUNT(DISTINCT b.student_id) AS unique_students,
  ROUND(COALESCE(SUM(EXTRACT(EPOCH FROM (b.ends_at - b.starts_at)) / 3600), 0)::numeric, 1) AS total_hours_mentored
FROM public.profiles p
JOIN public.mentor_profiles mp ON p.id = mp.user_id
LEFT JOIN public.bookings b ON p.id = b.mentor_id AND b.status = 'completed'
WHERE p.role = 'alumni'
GROUP BY p.id, p.full_name, p.avatar_url, mp.company, mp.job_title, mp.domain, mp.rating, mp.total_sessions
ORDER BY mp.total_sessions DESC, mp.rating DESC;

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id OR public.is_admin());

-- Student Profiles Policies
CREATE POLICY "Student profiles are viewable by authenticated users"
  ON public.student_profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Students can update their own student profile"
  ON public.student_profiles FOR ALL
  USING (auth.uid() = user_id OR public.is_admin())
  WITH CHECK (auth.uid() = user_id OR public.is_admin());

-- Mentor Profiles Policies
CREATE POLICY "Mentor profiles are viewable by all authenticated users"
  ON public.mentor_profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Mentors can manage their mentor profile"
  ON public.mentor_profiles FOR ALL
  USING (auth.uid() = user_id OR public.is_admin())
  WITH CHECK (auth.uid() = user_id OR public.is_admin());

-- Bookings Policies
CREATE POLICY "Users can view bookings they are part of"
  ON public.bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = student_id OR auth.uid() = mentor_id OR public.is_admin());

CREATE POLICY "Students can create bookings"
  ON public.bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Participants can update booking status"
  ON public.bookings FOR UPDATE
  TO authenticated
  USING (auth.uid() = student_id OR auth.uid() = mentor_id OR public.is_admin());

-- Feedback Policies
CREATE POLICY "Feedback is viewable by session participants"
  ON public.feedback FOR SELECT
  TO authenticated
  USING (auth.uid() = student_id OR auth.uid() = mentor_id OR public.is_admin());

CREATE POLICY "Mentors can create feedback for their sessions"
  ON public.feedback FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = mentor_id OR public.is_admin());

-- ==============================================================================
-- AUTOMATIC USER REGISTRATION TRIGGER
-- ==============================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  assigned_role TEXT;
  user_name TEXT;
BEGIN
  assigned_role := COALESCE(new.raw_user_meta_data->>'role', 'student');
  user_name := COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1));

  -- Insert profile
  INSERT INTO public.profiles (id, email, role, full_name, avatar_url, timezone)
  VALUES (
    new.id,
    new.email,
    assigned_role,
    user_name,
    new.raw_user_meta_data->>'avatar_url',
    COALESCE(new.raw_user_meta_data->>'timezone', 'Asia/Kolkata')
  );

  -- Insert role specific profile
  IF assigned_role = 'student' THEN
    INSERT INTO public.student_profiles (user_id, department, grad_year)
    VALUES (
      new.id,
      new.raw_user_meta_data->>'department',
      (new.raw_user_meta_data->>'grad_year')::INT
    );
  ELSIF assigned_role = 'alumni' THEN
    INSERT INTO public.mentor_profiles (
      user_id, 
      company, 
      job_title, 
      domain, 
      expertise, 
      years_experience,
      linkedin_url,
      cal_username
    )
    VALUES (
      new.id,
      COALESCE(new.raw_user_meta_data->>'company', 'Tech Company'),
      COALESCE(new.raw_user_meta_data->>'job_title', 'Software Engineer'),
      COALESCE(new.raw_user_meta_data->>'domain', 'Software Engineering'),
      ARRAY[COALESCE(new.raw_user_meta_data->>'domain', 'General')],
      COALESCE((new.raw_user_meta_data->>'years_experience')::INT, 2),
      new.raw_user_meta_data->>'linkedin_url',
      new.raw_user_meta_data->>'cal_username'
    );
  END IF;

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution on auth.users insert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger to update stats when feedback is submitted
CREATE OR REPLACE FUNCTION public.handle_feedback_submitted()
RETURNS TRIGGER AS $$
BEGIN
  -- Mark the booking as completed
  UPDATE public.bookings
  SET status = 'completed'
  WHERE id = new.booking_id;

  -- Update mentor stats
  UPDATE public.mentor_profiles
  SET 
    total_sessions = total_sessions + 1,
    rating = (
      SELECT ROUND(AVG((coding_rating + communication_rating + system_design_rating) / 3.0), 2)
      FROM public.feedback
      WHERE mentor_id = new.mentor_id
    )
  WHERE user_id = new.mentor_id;

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_feedback_created ON public.feedback;
CREATE TRIGGER on_feedback_created
  AFTER INSERT ON public.feedback
  FOR EACH ROW EXECUTE FUNCTION public.handle_feedback_submitted();

-- ==============================================================================
-- SUPABASE STORAGE BUCKET FOR RESUMES
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for resumes
CREATE POLICY "Students can upload their own resume"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Students can read their own resume"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Mentors can read resumes of their booked students"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'resumes' AND EXISTS (
      SELECT 1 FROM public.bookings b
      WHERE b.mentor_id = auth.uid() 
      AND b.resume_url LIKE '%' || name || '%'
    )
  );

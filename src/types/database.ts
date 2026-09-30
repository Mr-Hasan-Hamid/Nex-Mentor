export type UserRole = 'student' | 'alumni' | 'admin';

export type BookingStatus = 'confirmed' | 'completed' | 'cancelled';

export interface Profile {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
  avatar_url?: string | null;
  bio?: string | null;
  timezone: string;
  created_at: string;
  updated_at: string;
}

export interface StudentProfile {
  user_id: string;
  department?: string | null;
  grad_year?: number | null;
  target_companies?: string[] | null;
  resume_url?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface MentorProfile {
  user_id: string;
  company: string;
  job_title: string;
  domain: string;
  expertise: string[];
  years_experience: number;
  linkedin_url?: string | null;
  cal_username?: string | null;
  cal_event_slug?: string | null;
  is_verified: boolean;
  rating: number;
  total_sessions: number;
  created_at?: string;
  updated_at?: string;
}

export interface Booking {
  id: string;
  student_id: string;
  mentor_id: string;
  cal_booking_id?: string | null;
  starts_at: string;
  ends_at: string;
  resume_url?: string | null;
  focus_areas: string[];
  notes?: string | null;
  meeting_url?: string | null;
  status: BookingStatus;
  created_at: string;
  // Joined relation fields for convenience
  student?: Profile;
  mentor?: Profile & { mentor_profile?: MentorProfile };
}

export interface Feedback {
  id: string;
  booking_id: string;
  mentor_id: string;
  student_id: string;
  coding_rating: number;
  communication_rating: number;
  system_design_rating: number;
  strengths: string;
  improvements: string;
  overall_notes: string;
  created_at: string;
}

export interface MentorshipStats {
  mentor_id: string;
  total_sessions: number;
  students_mentored: number;
  hours_mentored: number;
  avg_rating: number;
}

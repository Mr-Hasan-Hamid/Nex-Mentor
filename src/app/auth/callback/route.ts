import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Determine redirection based on user role
      const { data: { user } } = await supabase.auth.getUser();
      const role = user?.user_metadata?.role;

      if (role === 'alumni') {
        return NextResponse.redirect(`${origin}/alumni/dashboard`);
      } else if (role === 'admin') {
        return NextResponse.redirect(`${origin}/admin/dashboard`);
      } else {
        return NextResponse.redirect(`${origin}/student/dashboard`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/login?error=auth_callback_failed`);
}

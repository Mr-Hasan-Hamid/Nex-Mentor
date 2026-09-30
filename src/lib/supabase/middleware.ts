import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });
  const path = request.nextUrl.pathname;

  // 1. Immediately bypass static assets, next internal files, and images
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/favicon.ico') ||
    path.match(/\.(svg|png|jpg|jpeg|gif|webp|css|js|map|woff|woff2|ico|ttf|eot)$/)
  ) {
    return supabaseResponse;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  // Skip remote check if placeholder credentials
  if (!supabaseUrl || supabaseUrl.includes('your-project') || !supabaseAnonKey) {
    return supabaseResponse;
  }

  try {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const isAuthPage = path.startsWith('/auth') || path === '/login' || path === '/signup';

    if (!user) {
      const isProtected =
        path.startsWith('/student') ||
        path.startsWith('/alumni') ||
        path.startsWith('/admin') ||
        path.startsWith('/dashboard');

      if (isProtected) {
        const url = request.nextUrl.clone();
        url.pathname = '/auth/login';
        url.searchParams.set('redirectTo', path);
        return NextResponse.redirect(url);
      }
      return supabaseResponse;
    }

    const userRole = user.user_metadata?.role as string | undefined;

    if (isAuthPage) {
      const url = request.nextUrl.clone();
      if (userRole === 'alumni') url.pathname = '/alumni/dashboard';
      else if (userRole === 'admin') url.pathname = '/admin/dashboard';
      else url.pathname = '/student/dashboard';
      return NextResponse.redirect(url);
    }

    if (path.startsWith('/student') && userRole && userRole !== 'student' && userRole !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/alumni/dashboard';
      return NextResponse.redirect(url);
    }

    if (path.startsWith('/alumni') && userRole && userRole !== 'alumni' && userRole !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/student/dashboard';
      return NextResponse.redirect(url);
    }

    if (path.startsWith('/admin') && userRole !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = userRole === 'alumni' ? '/alumni/dashboard' : '/student/dashboard';
      return NextResponse.redirect(url);
    }
  } catch (err) {
    console.error('[Middleware Auth Error]:', err);
  }

  return supabaseResponse;
}

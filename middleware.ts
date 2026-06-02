import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAppRoute =
    url.pathname.startsWith("/dashboard") ||
    url.pathname.startsWith("/contacts") ||
    url.pathname.startsWith("/pipeline") ||
    url.pathname.startsWith("/reminders") ||
    url.pathname.startsWith("/analytics") ||
    url.pathname.startsWith("/billing") ||
    url.pathname.startsWith("/settings");

  const isAuthRoute =
    url.pathname.startsWith("/login") || url.pathname.startsWith("/signup");

  if (isAppRoute && !user) {
    url.pathname = "/login";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && user) {
    url.pathname = "/dashboard";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/contacts/:path*",
    "/pipeline/:path*",
    "/reminders/:path*",
    "/analytics/:path*",
    "/billing/:path*",
    "/settings/:path*",
    "/login",
    "/signup",
  ],
};


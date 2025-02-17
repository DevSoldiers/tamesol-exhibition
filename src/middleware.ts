import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  // Handle internationalization first
  const intlResponse = intlMiddleware(req);

  // Check if the request is for an API route or static file
  if (req.nextUrl.pathname.startsWith('/api')) {
    return intlResponse;
  }

  // Get the session token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/profile']; // Add your protected routes here

  // Check if the user is trying to access a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Redirect to login if the user is not authenticated and trying to access a protected route
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/auth/signin', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  // If the user is authenticated and trying to access the login page, redirect to the home page
  if (token && req.nextUrl.pathname.startsWith('/auth/signin')) {
    const homeUrl = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(homeUrl);
  }

  // Return the internationalization middleware response
  return intlResponse;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(amh|en)/:path*'],
};
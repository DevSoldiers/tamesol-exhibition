import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const response = await intlMiddleware(request);

  // base URL
  const host = request.nextUrl.host;
  // path name
  const pathName = request.nextUrl.pathname;
  response.headers.set('X-Current-URL', `${host}${pathName}`);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(amh|en)/:path*'],
};
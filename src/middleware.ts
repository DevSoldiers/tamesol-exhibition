import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { serialize } from 'cookie';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const response = await intlMiddleware(request);

  // Base URL and path name
  const host = request.nextUrl.host;
  const pathName = request.nextUrl.pathname;
  response.headers.set('X-Current-URL', `${host}${pathName}`);

  // Extract token from Authorization header
  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    const [, token] = authHeader.split(' ');

    if (!token) {
      response.headers.set('X-User-Info', JSON.stringify({ token: '', phoneNumber: '' }));
    } else {
      try {
        // Use fetch instead of axios for Edge Runtime compatibility
        const userResponse = await fetch(
          'https://cbebirrpaymentgateway.cbe.com.et:8888/auth/user',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();

        // Create cookies
        const tokenCookie = serialize('cbe', token, {
          httpOnly: true,
          path: '/',
          secure: true,
          sameSite: 'strict',
        });

        const phoneCookie = serialize('phone', userData?.phone, {
          httpOnly: true,
          path: '/',
          secure: true,
          sameSite: 'strict',
        });

        // Append cookies to the response
        response.headers.append('Set-Cookie', tokenCookie);
        response.headers.append('Set-Cookie', phoneCookie);

        // Set user info in headers
        response.headers.set(
          'X-User-Info',
          JSON.stringify({ token, phoneNumber: userData?.phone })
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error gracefully
        response.headers.set('X-User-Info', JSON.stringify({ token: '', phoneNumber: '' }));
      }
    }
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(amh|en)/:path*'],
};

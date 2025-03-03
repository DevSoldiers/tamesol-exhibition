import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
import './globals.css';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/_components/Footer';
import Navbar from '@/_components/Navbar/Navbar';
import { ModalContextProvider } from '@/lib/context/modal.context';
import AuthProvider from '@/lib/context/authProvider.context';
import { headers } from 'next/headers';
import Mini_Ticket_Page from './_Mini_Ticket_Page/page';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Addis Neger Exhibition',
  description: 'By Tamesol Communication',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'amh')) {
    notFound();
  }

  const headerData = headers();
  const content = await getMessages();

  // Safely parse the X-User-Info header
  const user_info = (await headerData).get('X-User-Info');
  let parsed_user_info = { token: '', phoneNumber: '' };

  if (user_info) {
    try {
      parsed_user_info = JSON.parse(user_info);
    } catch (error) {
      console.error('Failed to parse X-User-Info:', error);
    }
  }

  const { token, phoneNumber } = parsed_user_info;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        {token ? (
          <AuthProvider>
            <NextIntlClientProvider messages={content}>
              <ModalContextProvider>
                <Navbar />
              </ModalContextProvider>
              {children}
              {/* footer section  */}
              <Footer />
            </NextIntlClientProvider>
          </AuthProvider>
        ) : (
          <NextIntlClientProvider messages={content}>
            <Mini_Ticket_Page cbeToken={token} phone={phoneNumber} />
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
}

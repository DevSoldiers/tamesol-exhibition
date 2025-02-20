import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
import './globals.css';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/_components/Footer';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import Navbar from '@/_components/Navbar/Navbar';
import { ModalContextProvider } from '@/lib/context/modal.context';
import AuthProvider from '@/lib/context/authProvider.context';

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

  const content = await getMessages();
  const session = await getServerSession(options);
  console.log('server session===>', session);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <AuthProvider>
          <NextIntlClientProvider messages={content}>
            <ModalContextProvider>
              <Navbar />
            </ModalContextProvider>
            {children}
            {/* footer section */}
            <Footer />
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
import './globals.css';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/_components/Navbar/Navbar';
import Footer from '@/_components/Footer';
import RegisterPage from '@/_components/Form/UserForm';
import OtpVerificationPage from '@/_components/Form/ConfirmOtp';
import RegisterUserForm from '@/_components/Form/RegisterUser.form';

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <NextIntlClientProvider messages={content}>
          <Navbar />
          {/* {children} */}
          {/* <RegisterPage /> */}
          {/* <OtpVerificationPage /> */}
          <RegisterUserForm />
          {/* footer section */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

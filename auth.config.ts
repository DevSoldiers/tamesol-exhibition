import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  providers: [],
};

export default NextAuth(authOptions);

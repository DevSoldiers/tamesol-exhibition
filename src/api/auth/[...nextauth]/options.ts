import { authService } from "@/lib/auth.service";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    secret: process.env.NEXT_PUBLIC_KEY,
    providers: [
        CredentialsProvider({
            id: "Signup",
            name: "Signup",
            credentials: {
                phoneNumber: { label: "phonenumber" },
                password: { label: "password" },
                otp: { label: "otp" },
                images: { label: "profile" },
            },
            async authorize(credentials) {
                const { phoneNumber, password, otp, images } = credentials!;
                try {
                    const user: any = await authService.register({
                        phoneNumber,
                        password,
                        otp,
                        images,
                    });
                    if (user) {
                        return user;
                    }
                    return null;
                } catch (error: any) {
                    throw new Error(error);
                }
            },
        }),
        CredentialsProvider({
            id: "signin",
            name: "Signin",
            credentials: {
                phoneNumber: {
                    label: "Phone Number",
                    type: "text",
                    placeholder: "Phone Number",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your Password",
                },
            },
            async authorize(credentials) {
                const user = await authService.login(credentials as any);
                if (user) {
                    return user;
                }

                return null;
            },
        }),
    ],

    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = (user as any)._id;
                token.token = (user as any).token;
                token.phoneNumber = (user as any).phoneNumber;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.user = token;
            }

            return session;
        },
    },
    jwt: {
        secret: "Process",
    },
    session: {
        strategy: "jwt",
        maxAge: 2592000,
    },
};
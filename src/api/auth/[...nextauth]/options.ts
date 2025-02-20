import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phoneNumber: { label: "Phone Number", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    // Login API call
                    const res = await fetch("https://iw2kq4i5clj6anz5amme62nb540fwlit.lambda-url.us-east-1.on.aws/api/v2/user/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            phoneNumber: credentials?.phoneNumber,
                            password: credentials?.password,
                        }),
                    });

                    const user = await res.json();

                    if (user.status === "SUCCESS") {
                        return {
                            id: user.data._id,
                            name: user.data.name,
                            phoneNumber: user.data.phoneNumber,
                            token: user.data.token,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error("Error during login:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.phoneNumber = user.phoneNumber;
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.phoneNumber = token.phoneNumber;
            session.user.token = token.token;
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};

export default NextAuth(authOptions);
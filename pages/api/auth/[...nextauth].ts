import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "@/firebaseAdmin";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirestoreAdapter(adminDb),
  // events: {
  //   async signIn(message: any) {
  //     const { user, account, profile } = message;
  //     console.log("signin callback", user);
  //   },
  // },
};

export default NextAuth(authOptions);

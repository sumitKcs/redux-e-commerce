import "./globals.css";
import { StoreProvider } from "@/components";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/NavBar"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "HeadphoneZone.in",
  description: "A store for Audiophiles",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://m.stripe.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.shopify.com/" />
        <link
          rel="preconnect"
          href="https://cdn.shopify.com/"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://m.stripe.com" />
      </head>
      <body className="relative h-[100svh] w-screen bg-white block overflow-visible">
        <SessionProvider session={session}>
          <StoreProvider>
            <NavBar />
            {children}
            <Footer />
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

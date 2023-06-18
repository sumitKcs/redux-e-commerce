import "./globals.css";
import { StoreProvider, Footer } from "@/components";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NavBar } from "@/components";

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

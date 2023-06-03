import "./globals.css";
import { StoreProvider, Header, Footer } from "@/components";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

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
  console.log("i am parent layout");
  return (
    <html lang="en">
      <body className="h-[100svh] w-screen bg-white">
        <SessionProvider session={session}>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

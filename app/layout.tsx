import "./globals.css";
import { StoreProvider } from "@/components";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="h-[100svh] w-screen overflow-x-hidden  bg-[#f7f7f5]">
        <SessionProvider session={session}>
          <StoreProvider>{children}</StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

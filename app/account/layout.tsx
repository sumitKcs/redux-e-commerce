"use client";

import { Header, Footer, AccountMenu } from "@/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session?.user) {
    router.push("/login");
    return null;
  }
  return (
    <>
      <Header />
      <AccountMenu />
      {children}
      <Footer />
    </>
  );
};

export default AccountLayout;

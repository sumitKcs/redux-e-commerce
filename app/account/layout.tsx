import { Header, Footer, AccountMenu } from "@/components";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
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

"use client";

import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();
  const userFullName = session?.user?.name;
  const userFirstName = userFullName?.split(" ")[0];

  return (
    <section>
      <div className="font-bold mt-5 mb-5 flex justify-center items-center">{`Hello ${userFirstName}`}</div>
    </section>
  );
};

export default Account;

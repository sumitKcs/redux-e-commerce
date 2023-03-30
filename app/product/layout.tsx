import { NavBar } from "@/components";
import React from "react";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return <>
   <NavBar />
  {children}
  </>;
};

export default HomeLayout;

import React from "react";
import { NavBar, NotificationBar } from "@/components";

const Header = () => {
  return (
    <header style={{ display: "initial" }}>
      <NotificationBar />
      <NavBar />
    </header>
  );
};

export default Header;

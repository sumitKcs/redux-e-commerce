"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useState } from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { MENUITEMS } from "@/lib/menuItems";
import MenuDrawerController from "./MenuDrawerController";

const MenuDrawer = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [displayList, setDisplayList] = useState<string>(MENUITEMS.MENU);
  return (
    <div
      aria-label="modal"
      aria-modal={isVisible}
      className={`fixed top-0 h-[100dvh] w-screen z-50 overflow-hidden justify-center md:justify-end p-10 lg:p-6 ${
        isVisible ? "flex" : "hidden"
      } backdrop-brightness-50`}
    >
      <div
        aria-label="modal-content"
        className={`absolute bottom-0 w-full md:w-[70%] lg:w-full bg-white rounded-lg p-5 lg:p-10 flex justify-center items-center`}
      >
        <div className="w-full h-[60%] flex flex-col gap-5 text-black opacity-80  ">
          <div className="w-full text-lg font-bold flex justify-between">
            <div className="w-full flex flex-col justify-start">
              <MenuDrawerController
                displayList={displayList}
                setDisplayList={setDisplayList}
                setMenuVisible={setIsVisible}
              />
            </div>
            <div>
              <XMarkIcon
                onClick={() => {
                  setIsVisible(false);
                  setDisplayList(MENUITEMS.MENU);
                }}
                className="w-6 h-6 text-gray-800 cursor-pointer"
              />
            </div>
          </div>
          <hr />
          <div className="flex justify-start gap-2 items-center">
            <Link href="https://www.facebook.com/HeadphoneZone">
              <ImFacebook className="w-8 h-8" />
            </Link>
            <Link href="https://twitter.com/Headphone_Zone">
              <ImTwitter className="w-8 h-8" />
            </Link>
            <Link href="https://www.instagram.com/headphonezone/">
              <FaInstagram className="w-8 h-8" />
            </Link>
            <Link href="https://www.youtube.com/@headphone_zone?sub_confirmation=1">
              <ImYoutube className="w-8 h-8" />
            </Link>
          </div>
          <hr />
          <div className="font-bold">Account</div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;

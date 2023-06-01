"use client";

import ChevronCircleWithText from "./ChevronCircleWithText";
import { Dispatch, SetStateAction, MouseEvent } from "react";
import { MENUITEMS } from "@/lib/menuItems";
import { useRouter } from "next/navigation";

const MenuList = ({
  menuItem,
  displayList,
  setDisplayList,
  setMenuVisible,
}: {
  menuItem: string;
  displayList: string;
  setDisplayList: Dispatch<SetStateAction<string>>;
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const handleMenuItemClick = (e: MouseEvent<HTMLDivElement>) => {
    const menuItemValue = e.currentTarget.getAttribute("data-menu-item");
    console.log("onclickevent: ", menuItemValue);
    if (menuItem?.toLowerCase() === "categories") {
      setDisplayList(MENUITEMS.CATEGORIES);
    }
    if (menuItem?.toLowerCase() === "brands") {
      setDisplayList(MENUITEMS.BRANDS);
    }
    if (menuItem?.toLowerCase() === "price") {
      setDisplayList(MENUITEMS.PRICES);
    }
    if (menuItem?.toLowerCase() === "info") {
      setDisplayList(MENUITEMS.INFO);
    }
    if (menuItem?.toLowerCase() === "headphones") {
      setMenuVisible(false);
      router.push("/product/categories/headphones");
    }
    if (menuItem?.toLowerCase() === "in-ears") {
      setMenuVisible(false);
      router.push("/product/categories/inears");
    }
    if (menuItem?.toLowerCase() === "wireless") {
      setMenuVisible(false);
      router.push("/product/categories/wireless");
    }
    if (menuItem?.toLowerCase() === "faces & amps") {
      setMenuVisible(false);
      router.push("/product/categories/amps");
    }
    if (menuItem?.toLowerCase() === "hi-res audio players") {
      setMenuVisible(false);
      router.push("/product/categories/hires");
    }
    if (menuItem?.toLowerCase() === "home audio") {
      setMenuVisible(false);
      router.push("/product/categories/homeaudio");
    }
  };
  return (
    <div
      data-menu-item={menuItem}
      className="text-2xl font-extrabold cursor-pointer"
      onClick={handleMenuItemClick}
    >
      <div className="flex justify-between group items-center">
        <div>{menuItem}</div>
        <div>
          <ChevronCircleWithText text=""></ChevronCircleWithText>
        </div>
      </div>
    </div>
  );
};

export default MenuList;

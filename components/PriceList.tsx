"use client";

import ChevronCircleWithText from "./ChevronCircleWithText";
import { Dispatch, SetStateAction, MouseEvent } from "react";
import { MENUITEMS } from "@/lib/menuItems";
import { useRouter } from "next/navigation";

const PriceList = ({
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
    setDisplayList(MENUITEMS.MENU);
    setMenuVisible(false);
    router.push(`/product/prices/${menuItem.toLowerCase()}`);
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

export default PriceList;

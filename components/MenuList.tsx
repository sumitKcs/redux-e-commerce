import ChevronCircleWithText from "./ChevronCircleWithText";
import { Dispatch, SetStateAction, MouseEvent } from "react";
import { MENUITEMS } from "@/lib/menuItems";

const MenuList = ({
  menuItem,
  displayList,
  setDisplayList,
}: {
  menuItem: string;
  displayList: string;
  setDisplayList: Dispatch<SetStateAction<string>>;
}) => {
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

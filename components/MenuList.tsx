import ChevronCircleWithText from "./ChevronCircleWithText";
import { Dispatch, SetStateAction } from "react";

const MenuList = ({
  menuItem,
  displayList,
  setDisplayList,
}: {
  menuItem: string;
  displayList: string;
  setDisplayList: Dispatch<SetStateAction<string>>;
}) => {
  const handleMenuItemClick = () => {
    const menuItemDiv: HTMLDivElement | null =
      document.querySelector("[data-menu-item]");
    console.log("menuItemClick", menuItemDiv?.innerText);
  };
  return (
    <div className="text-2xl font-extrabold" onClick={handleMenuItemClick}>
      <div className="flex justify-between group items-center">
        <div data-menu-item={menuItem}>{menuItem}</div>
        <div>
          <ChevronCircleWithText text=""></ChevronCircleWithText>
        </div>
      </div>
    </div>
  );
};

export default MenuList;

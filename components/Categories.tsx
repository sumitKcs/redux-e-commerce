import { Dispatch, SetStateAction } from "react";
import ChevronCircleWithText from "./ChevronCircleWithText";
import { MENUITEMS } from "@/lib/menuItems";

const Categories = ({
  menuItem,
  displayList,
  setDisplayList,
}: {
  menuItem: string;
  displayList: string;
  setDisplayList: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="text-2xl font-extrabold">
      <div className="flex justify-between group items-center">
        <div data-menu-item={menuItem}>{menuItem}</div>
        <div>
          <ChevronCircleWithText text=""></ChevronCircleWithText>
        </div>
      </div>
    </div>
  );
};

export default Categories;

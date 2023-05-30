import ChevronCircleWithText from "./ChevronCircleWithText";

const MenuList = ({ menuItem }: { menuItem: string }) => {
  return (
    <div className="text-2xl font-extrabold">
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

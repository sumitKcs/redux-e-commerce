import { Dispatch, SetStateAction } from "react";
import { MENUITEMS } from "@/lib/menuItems";
import MenuList from "./MenuList";
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetMobileMenuQuery,
  useGetPriceQuery,
} from "@/store/apiSlice";
import Categories from "./Categories";
import { useRouter } from "next/navigation";

const MenuDrawerController = ({
  displayList,
  setDisplayList,
}: {
  displayList: string;
  setDisplayList: Dispatch<SetStateAction<string>>;
}) => {
  const { data: menu } = useGetMobileMenuQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: brands } = useGetBrandsQuery();
  const { data: prices } = useGetPriceQuery();
  const router = useRouter();

  switch (displayList) {
    case MENUITEMS.CATEGORIES: {
      return (
        <div>
          <div
            className="text-gray-700 font-bold text-sm cursor-pointer hover:underline"
            onClick={() => setDisplayList(MENUITEMS.MENU)}
          >
            &lt; Categories
          </div>
          {categories?.map((category: string) => (
            <Categories
              menuItem={category}
              displayList={displayList}
              setDisplayList={setDisplayList}
            />
          ))}
        </div>
      );
      break;
    }
    case MENUITEMS.BRANDS: {
      return (
        <div>
          <div
            className="text-gray-700 font-bold text-sm cursor-pointer hover:underline"
            onClick={() => setDisplayList(MENUITEMS.MENU)}
          >
            &lt; Brands
          </div>
          {brands?.map((brand: string) => (
            <Categories
              menuItem={brand}
              displayList={displayList}
              setDisplayList={setDisplayList}
            />
          ))}
        </div>
      );
      break;
    }
    case MENUITEMS.PRICES: {
      return (
        <div>
          <div
            className="text-gray-700 font-bold text-sm cursor-pointer hover:underline"
            onClick={() => setDisplayList(MENUITEMS.MENU)}
          >
            &lt; Price
          </div>
          {prices?.map((price: string) => (
            <Categories
              menuItem={price}
              displayList={displayList}
              setDisplayList={setDisplayList}
            />
          ))}
        </div>
      );
      break;
    }
    case MENUITEMS.INFO: {
      router.push("/about");
      break;
    }
  }
  return (
    <>
      {menu?.map((item: string) => (
        <MenuList
          menuItem={item}
          displayList={displayList}
          setDisplayList={setDisplayList}
        />
      ))}
    </>
  );
};

export default MenuDrawerController;

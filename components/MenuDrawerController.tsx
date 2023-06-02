import { Dispatch, SetStateAction } from "react";
import { MENUITEMS } from "@/lib/menuItems";
import MenuList from "./MenuList";
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetMobileMenuQuery,
  useGetPricesQuery,
} from "@/store/apiSlice";
import { useRouter } from "next/navigation";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";
import PriceList from "./PriceList";

const MenuDrawerController = ({
  displayList,
  setDisplayList,
  setMenuVisible,
}: {
  displayList: string;
  setDisplayList: Dispatch<SetStateAction<string>>;
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: menu } = useGetMobileMenuQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: brands } = useGetBrandsQuery();
  const { data: prices } = useGetPricesQuery();
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
            <CategoryList
              menuItem={category}
              displayList={displayList}
              setDisplayList={setDisplayList}
              setMenuVisible={setMenuVisible}
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
            <BrandList
              menuItem={brand}
              displayList={displayList}
              setDisplayList={setDisplayList}
              setMenuVisible={setMenuVisible}
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
            <PriceList
              menuItem={price}
              displayList={displayList}
              setDisplayList={setDisplayList}
              setMenuVisible={setMenuVisible}
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
          setMenuVisible={setMenuVisible}
        />
      ))}
    </>
  );
};

export default MenuDrawerController;

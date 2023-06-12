import { Dispatch, SetStateAction } from "react";
import { MENUITEMS } from "@/lib/menuItems";
import MenuList from "./MenuList";
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetMenuQuery,
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
  const { data: menu } = useGetMenuQuery();
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
              key={category}
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
          {brands?.map((brand: { brand: string }) => (
            <BrandList
              key={brand.brand}
              menuItem={brand.brand}
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
          {prices?.map((price: { price: string }) => (
            <PriceList
              key={price.price}
              menuItem={price.price}
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
      {menu?.map((item: { menu: string }) => (
        <MenuList
          key={item.menu}
          menuItem={item.menu}
          displayList={displayList}
          setDisplayList={setDisplayList}
          setMenuVisible={setMenuVisible}
        />
      ))}
    </>
  );
};

export default MenuDrawerController;

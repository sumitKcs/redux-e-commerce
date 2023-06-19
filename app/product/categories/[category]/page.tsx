import dynamic from "next/dynamic";
const CategoryController = dynamic(
  () => import("@/components/CategoryController")
);
type Props = {
  params: {
    category: string;
  };
};

const CategoryProducts = ({ params }: Props) => {
  return <CategoryController category={params.category} />;
};

export default CategoryProducts;

const Products = ({ category }: { category: string }) => {
  return <div>{decodeURIComponent(category)}</div>;
};

export default Products;

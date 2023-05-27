interface Product {
  id: string;
  sku: string;
  slug: string;
  brand: string;
  category: string;
  type: string;
  price: number;
  selling_price: number;
  dropped_price: number;
  images: string[];
  featured_image: string;
  tags: string[];
  stars: number;
  total_ratings: number;
  cartQuantity: number;
}

interface Banner {
  id: string;
  banner_text: string;
  banner_slogan: string;
  banner_image: {
    desktop: string;
    mobile: string;
  };
  slug: string;
}

interface Testimonials {
  id: string;
  name: string;
  comment: string;
  rating: number;
}
interface ProductGrid {
  id: string;
  grid_text: string;
  grid_image: string;
  slug: string;
}

interface PeopleGrid {
  id: string;
  person_image: string;
}

interface Data {
  all_products: Product[];
  banner: Banner[];
  testimonials: Testimonial[];
}


interface Products {
    id: number;
    title: string;
    image: string;
    category: string,
    description: string,
    price: number;
    cartQuantity: number;
    rating: {
        rate: number,
        count: number,
        
    }
}

interface Product  {
    id: string;
    sku: string;
    type: string;
    price: number ;
    selling_price: number
    dropped_price: number;
    images: string;
    featured_image: string;
    tags: string[];
    stars: number;
    total_ratings: number;
  
  };

  interface Banner {
    id: string,
    banner_text: string;
    banner_slogan: string;
    banner_image: {
        desktop: string;
        mobile: string;
    };
    slug: string;
  }

  interface Testimonial {
    id: string;
    name: string;
    comment: string;
    rating: number;
  }
  
  interface Data {
    all_products: Product[];
    banner: Banner[];
    testimonials: Testimonial[];

  }
 


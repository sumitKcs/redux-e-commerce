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
    offer_price: number ;
    price: number ;
    featured_image: string;
    images: string;
    tags: string[];
  
  };
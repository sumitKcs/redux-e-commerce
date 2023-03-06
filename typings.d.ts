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
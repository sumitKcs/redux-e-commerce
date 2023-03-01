interface Products {
    id: number;
    title: string;
    image: string;
    category: string,
    description: string,
    price: number;
    rating: {
        rate: number,
        count: number,
        
    }
}
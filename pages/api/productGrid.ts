import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product_grid`)
    const data = await response.json()
  
    res.status(200).json(data);
    
} catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
}

}



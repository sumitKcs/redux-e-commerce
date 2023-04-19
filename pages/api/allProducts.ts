import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://localhost:3004/all_products");
    const result = await response.json();

    const data = result.map((product: Product) => ({
      ...product,
      cartQuantity: 0,
    }));

    res.status(200).json(data);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}

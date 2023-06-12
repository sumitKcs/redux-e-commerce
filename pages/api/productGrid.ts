import { mongooseConnect } from "@/lib/mongoose";
import { ProductGrid } from "@/models/ProductGrid";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongooseConnect();
    const data = await ProductGrid.find({});

    res.status(200).json(data);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}

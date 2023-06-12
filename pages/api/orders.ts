import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongooseConnect();
    const data = await Order.find({}).sort({ updatedAt: -1 });

    res.status(200).json(data);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}

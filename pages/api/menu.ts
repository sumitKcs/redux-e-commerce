import { mongooseConnect } from "@/lib/mongoose";
import { Menu } from "@/models/Menu";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongooseConnect();
    const data = await Menu.find({});
    console.log("menu", data);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}

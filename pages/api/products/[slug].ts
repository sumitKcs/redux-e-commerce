import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.url;
  const params = url?.split("/");
  const slug = params?.[params?.length! - 1];

  try {
    const response = await fetch(
      `http://localhost:3004/all_products?slug=${slug}`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}

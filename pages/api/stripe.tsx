import { NextApiRequest, NextApiResponse } from "next";
import { countries } from "@/lib/countries";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const cartItems = JSON.parse(req.body);
    try {
      const params = {
        mode: "payment",
        submit_type: "pay",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: countries,
        },
        shipping_options: [
          { shipping_rate: "shr_1MpwRCSIKPgl6zm5Ar4DOj7O" },
          { shipping_rate: "shr_1MpwSYSIKPgl6zm5H42MUQHf" },
        ],
        line_items: cartItems.map((item: Products) => {
          return {
            price_data: {
              currency: "inr",
              unit_amount: item.price * 100,
              product_data: {
                name: item.title,
                description: item.description,
                images: [item.image],
              },
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.cartQuantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cart`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
      console.log("session_url: ", session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

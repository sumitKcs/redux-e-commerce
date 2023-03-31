import { countries } from "@/lib/countries";
import { NextApiRequest, NextApiResponse } from "next";


const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "POST") {
    const {cartItems, email } = req.body;
    console.log(email, cartItems)
    const transformedData = {
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
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/cart`,
      metadata: {
        email: email,
        images: JSON.stringify(cartItems.map((item: Products) => item.image))
      },
      line_items: cartItems.map((item: Products) => ({
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
      })),
    
    };
    try {
      // creating checkout session
      const session = await stripe.checkout.sessions.create(transformedData);
      //sending session id as response
      res.status(200).json(session.id);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "../../models/Order";

//establish a connection to stripe
const stripePromise = import("stripe").then((module) => {
  const Stripe = module.default;
  return (Stripe as any)(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });
});
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await mongooseConnect();
  const requestBUffer = await buffer(req);
  // const payload = requestBUffer.toString();
  const signature = req.headers["stripe-signature"];

  let event;

  //verify that the EVENT posted came from stripe
  try {
    const stripe = await stripePromise;
    event = stripe.webhooks.constructEvent(
      requestBUffer,
      signature,
      endpointSecret
    );
  } catch (error: any) {
    console.log("ERROR: ", error.message);
    return res.status(400).send("webhook error: " + error.message);
  }

  // handle the checkout.session.complete.event

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { address, name } = session.customer_details;
    const paid = session.payment_status;
    const total_amount = session.amount_total;
    const shipping_cost = session.shipping_cost.amount_total;
    console.log("session", session);
    //fulfill the order
    if (session.payment_status === "paid") {
      console.log("payment done, saving to database");
      await Order.create({
        email: session.metadata.email,
        items: JSON.parse(session.metadata.items),
        address: { ...address, email: session.customer_details.email },
        name,
        total_amount,
        shipping_cost,
        paid,
      });
    }
  }
  res.status(200).send("ok");
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

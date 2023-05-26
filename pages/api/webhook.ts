import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import { adminDb } from "@/firebaseAdmin";
import * as admin from "firebase-admin";

//establish a connection to stripe
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const requestBUffer = await buffer(req);
  // const payload = requestBUffer.toString();
  const signature = req.headers["stripe-signature"];

  let event;

  //verify that the EVENT posted came from stripe
  try {
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
    console.log(session);
    //fulfill the order
    if (session.payment_status === "paid") {
      adminDb
        .collection("orders")
        .doc(session.metadata.email)
        .set({
          orderId: session.id,
          email: session.metadata.email,
          amount: session.amount_total / 100,
          amount_shipping: session.total_details.amount_shipping / 100,
          slug: JSON.parse(session.metadata.slugs),
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          console.log(`SUCCESS: order ${session.id} has been added to the DB `);
        })
        .catch((err) => res.status(404).send(`Webhook error: ${err.message}`));
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

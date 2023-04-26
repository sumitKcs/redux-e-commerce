import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import { adminDb } from "@/firebaseAdmin";
import * as admin from "firebase-admin";

//secure a connection to firebase admin
// const serviceAccount = require("../../serviceAccountKey.json");

// const app = !admin.apps.length
//  ? admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     })
//   : admin.app();

//establish a connection to stripe
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const endpointSecret =
  "whsec_38416323c9c7513e4d9a5b10d759188bb32ff99d4f4bb845f4b193f9273b8fde";

export default async (req, res) => {
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
  } catch (error) {
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

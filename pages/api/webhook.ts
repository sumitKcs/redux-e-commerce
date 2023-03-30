import { NextApiRequest, NextApiResponse } from "next"
import { buffer } from 'micro'
import * as admin from "firebase-admin"


//secure a connection to firebase admin
const serviceAccount = require('../../permissions.json')

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()

//establish a connection to stripe
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session: any) => {
    return  app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id).set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(`SUCCESS: order ${session.id} has been added to the DB `)
    })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST") {
        const requestBUffer = await buffer(req)
        const payload = requestBUffer.toString()
        const signature = req.headers["stripe-signature"]

        let event;

        //verify that the EVENT posted came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, signature, endpointSecret)
        } catch (error: any) {
            console.log('ERROR: ',error.message)
            return res.status(400).send('webhook error: ' + error.message)
        }

        // handle the checkout.session.complete.event
        if(event.type === 'checkout.session.completed') {
            const session = event.data.object

            //fulfill the order
            return fulfillOrder(session)
            .then(() => res.status(200))
            .catch((err) => res.status(404).send(`Webhook error: ${err.message}`))
        }

    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}
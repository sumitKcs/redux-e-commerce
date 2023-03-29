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

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST") {
        const requestBUffer = await buffer(req)
        const payload = requestBUffer.toString()
        

    }
}
import { NextApiRequest, NextApiResponse } from "next"
import { buffer } from 'micro'
import * as admin from "firebase-admin"

const serviceAccount = require('../../permissions.json')

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST") {

    }
}
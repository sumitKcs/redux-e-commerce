import { Schema, model, models, InferSchemaType } from "mongoose";


const DealScehema = new Schema({
  deal: { type: String, required: true },
});

type Deal = InferSchemaType<typeof DealScehema>;

export const Deal = models?.Deal || model("Deal", DealScehema);

import { Schema, model, models, InferSchemaType } from "mongoose";

const BrandScehema = new Schema({
  brand: { type: String, required: true },
});

type Brand = InferSchemaType<typeof BrandScehema>;

export const Brand = models?.Brand || model("Brand", BrandScehema);

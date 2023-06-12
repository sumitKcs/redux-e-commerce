import { Schema, model, models, InferSchemaType } from "mongoose";

const ProductGridScehema = new Schema({
  id: { type: String, required: true },
  person_image: { type: String, required: true },
});

type ProductGrid = InferSchemaType<typeof ProductGridScehema>;

export const ProductGrid =
  models?.ProductGrid || model("ProductGrid", ProductGridScehema);

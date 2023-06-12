import { Schema, model, models, InferSchemaType } from "mongoose";

const ProductGridScehema = new Schema({
  id: { type: String, required: true },
  grid_text: { type: String, required: true },
  grid_image: { type: String, required: true },
  slug: { type: String, required: true },
});

type ProductGrid = InferSchemaType<typeof ProductGridScehema>;

export const ProductGrid =
  models?.ProductGrid || model("ProductGrid", ProductGridScehema);

import { Schema, model, models, InferSchemaType } from "mongoose";

const ProductScehema = new Schema({
  id: { type: String, required: true },
  sku: { type: String, required: true },
  slug: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  images: { type: [String], required: true },
  featured_image: { type: String, required: true },
  price: { type: Number, required: true },
  selling_price: { type: Number, required: true },
  dropped_price: { type: Number, required: true },
  tags: { type: [String], required: true },
  stars: { type: Number, required: true },
  total_ratings: { type: Number, required: true },
});

type Product = InferSchemaType<typeof ProductScehema>;

export const Product = models?.Product || model("Product", ProductScehema);

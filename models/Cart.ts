import { Schema, model } from "mongoose";

const CartScehema = new Schema(
  {
    id: { type: String, required: true },
    sku: { type: String, required: true },
    slug: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    selling_price: { type: Number, required: true },
    dropped_price: { type: Number, required: true },
    images: { type: [String], required: true },
    featured_image: { type: String, required: true },
    tags: { type: [String], required: true },
    stars: { type: Number, required: true },
    total_ratings: { type: Number, required: true },
    cartQuantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Cart = model("cart", CartScehema);

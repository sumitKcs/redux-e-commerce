import { Schema, model, models, InferSchemaType } from "mongoose";

const ItemsSchema = new Schema({
  sku: { type: String, required: true },
  slug: { type: String, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});
const AddressSchema = new Schema({
  city: String,
  country: String,
  line1: String,
  postal_code: String,
  state: String,
  email: String,
});

const OrderSchema = new Schema(
  {
    email: { type: String, required: true },
    items: [ItemsSchema],
    address: AddressSchema,
    total_amount: Number,
    shipping_cost: Number,
    paid: String,
  },
  {
    timestamps: true,
  }
);

type Order = InferSchemaType<typeof OrderSchema>;

export const Order = models?.Order || model("Order", OrderSchema);

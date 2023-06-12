import { Schema, model, models, InferSchemaType } from "mongoose";

const BannerImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const PriceScehema = new Schema({
  price: { type: String, required: true },
});

type Price = InferSchemaType<typeof PriceScehema>;

export const Price = models?.Price || model("Price", PriceScehema);

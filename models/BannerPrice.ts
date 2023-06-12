import { Schema, model, models, InferSchemaType } from "mongoose";

const ImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BannerPriceScehema = new Schema({
  price: { type: String, required: true },
  images: { type: ImageSchema, required: true },
});

type BannerPrice = InferSchemaType<typeof BannerPriceScehema>;

export const BannerPrice =
  models?.BannerPrice || model("BannerPrice", BannerPriceScehema);

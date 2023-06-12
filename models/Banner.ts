import { Schema, model, models, InferSchemaType } from "mongoose";

const BannerImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BannerScehema = new Schema({
  id: { type: String, required: true },
  banner_text: { type: String, required: true },
  banner_slogan: { type: String, required: true },
  banner_image: { type: BannerImageSchema, required: true },
  slug: { type: String, required: true },
});

type Banner = InferSchemaType<typeof BannerScehema>;

export const Banner = models?.Banner || model("Banner", BannerScehema);

import { Schema, model, models, InferSchemaType } from "mongoose";

const ImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BannerCategoryScehema = new Schema({
  category: { type: String, required: true },
  images: { type: ImageSchema, required: true },
});

type BannerCategory = InferSchemaType<typeof BannerCategoryScehema>;

export const BannerCategory =
  models?.BannerCategory || model("BannerCategory", BannerCategoryScehema);

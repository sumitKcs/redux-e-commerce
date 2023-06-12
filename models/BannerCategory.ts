import { Schema, model, models, InferSchemaType } from "mongoose";

const ImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BannerCategoryScehema = new Schema({
  headphones: { type: ImageSchema, required: true },
  "in-ears": { type: String, required: true },
});

type BannerCategory = InferSchemaType<typeof BannerCategoryScehema>;

export const BannerCategory =
  models?.BannerCategory || model("BannerCategory", BannerCategoryScehema);

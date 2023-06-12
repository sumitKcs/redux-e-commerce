import { Schema, model, models, InferSchemaType } from "mongoose";

const ImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BannerBrandScehema = new Schema({
  headphones: { type: ImageSchema, required: true },
  "in-ears": { type: String, required: true },
});

type BannerBrand = InferSchemaType<typeof BannerBrandScehema>;

export const BannerBrand =
  models?.BannerBrand || model("BannerBrand", BannerBrandScehema);

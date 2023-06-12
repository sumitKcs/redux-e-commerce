import { Schema, model, models, InferSchemaType } from "mongoose";

const ImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BannerBrandScehema = new Schema({
  brand: { type: String, required: true },
  images: { type: ImageSchema, required: true },
});

type BannerBrand = InferSchemaType<typeof BannerBrandScehema>;

export const BannerBrand =
  models?.BannerBrand || model("BannerBrand", BannerBrandScehema);

import { Schema, model, models, InferSchemaType } from "mongoose";

const BannerImageSchema = new Schema({
  desktop: { type: String, required: true },
  mobile: { type: String, required: true },
});

const MenuScehema = new Schema({
  menu: { type: String, required: true },
});

type Menu = InferSchemaType<typeof MenuScehema>;

export const Menu = models?.Menu || model("Menu", MenuScehema);

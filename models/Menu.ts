import { Schema, model, models, InferSchemaType } from "mongoose";

const MenuScehema = new Schema({
  menu: { type: String, required: true },
});

type Menu = InferSchemaType<typeof MenuScehema>;

export const Menu = models?.Menu || model("Menu", MenuScehema);

import { Schema, model, models, InferSchemaType } from "mongoose";


const CategoryScehema = new Schema({
  menu: { type: String, required: true },
});

type Category = InferSchemaType<typeof CategoryScehema>;

export const Category = models?.Category || model("Category", CategoryScehema);

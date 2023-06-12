import { Schema, model, models, InferSchemaType } from "mongoose";

const PeopleGridScehema = new Schema({
  id: { type: String, required: true },
  person_image: { type: String, required: true },
});

type PeopleGrid = InferSchemaType<typeof PeopleGridScehema>;

export const PeopleGrid =
  models?.PeopleGrid || model("PeopleGrid", PeopleGridScehema);

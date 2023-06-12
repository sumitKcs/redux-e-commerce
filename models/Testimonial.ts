import { Schema, model, models, InferSchemaType } from "mongoose";

const TestimonialScehema = new Schema({
  id: { type: String, required: true },
  person_image: { type: String, required: true },
});

type Testimonial = InferSchemaType<typeof TestimonialScehema>;

export const Testimonial =
  models?.Testimonial || model("Testimonial", TestimonialScehema);

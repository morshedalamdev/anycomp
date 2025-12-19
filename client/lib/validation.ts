import z from "zod";

export const SpecialistCreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  duration: z.preprocess(
    (val) => Number(val),
    z.number().min(1, { message: "Duration must be at least 1 day" })
  ),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(1, { message: "Price must be at least 1.00 MYR" })
  ),
  category: z.string().min(1, { message: "Category is required" }),
});

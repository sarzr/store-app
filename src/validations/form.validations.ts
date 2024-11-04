import { z } from "zod";

export const validationInputs = z.object({
  email: z
    .string()
    .refine(
      (value) =>
        /[a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g.test(value),
      "email is not valid"
    ),
  phoneNumber: z
    .string()
    .refine((value) => /^\d+$/.test(value), "It must to be number"),
  landlinePhone: z
    .string()
    .refine((value) => /^(0[1-9]{2,3})-\d{7,8}$/.test(value), "not valid"),
});

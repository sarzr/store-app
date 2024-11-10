import { z } from "zod";

export const validationInputs = z.object({
  firstName: z
    .string()
    .min(4)
    .refine(
      (value) => !/\d+/g.test(value),
      "firstname must be at least 4 characters"
    ),
  lastName: z
    .string()
    .min(4)
    .refine(
      (value) => !/\d+/g.test(value),
      "firstname must be at least 4 characters"
    ),
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
  address: z
    .string()
    .min(4)
    .refine(
      (value) => !/\d+/g.test(value),
      "firstname must be at least 4 characters"
    ),
});

import { z } from "zod";

const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z'\-\s.]{1,79}$/;

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long")
    .regex(NAME_REGEX, "Please enter a valid name"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(120, "Email is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(PHONE_REGEX, "Please enter a valid US phone number"),
  terms: z.literal(true, {
    message: "You must accept the Terms and Conditions",
  }),
  marketingOptIn: z.boolean().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

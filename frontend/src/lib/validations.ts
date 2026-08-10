import { z } from "zod";

export const contactInquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name is required").max(100),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().optional(),
  country: z.string().min(2, "Please select or enter a country"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  consent: z.boolean().refine((val) => val === true, "You must consent to privacy policy processing"),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const updateInquiryStatusSchema = z.object({
  status: z.enum(["PENDING", "IN_REVIEW", "RESPONDED", "ARCHIVED"]),
});

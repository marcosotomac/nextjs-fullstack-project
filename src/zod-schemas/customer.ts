import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";
import { z } from "zod";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  email: (schema) => schema.email("Please enter a valid email address"),
  phone: (schema) =>
    schema
      .min(1, "Phone number is required")
      .regex(/^\d+$/, "Phone number must be digits"),
  address1: (schema) => schema.min(1, "Address is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.length(2, "State must be 2 characters"),
  zip: (schema) => schema.min(1, "ZIP code is required"),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;

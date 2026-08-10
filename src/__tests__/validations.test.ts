import { describe, it, expect } from "vitest";
import { contactInquirySchema, loginSchema } from "../lib/validations";

describe("Validation Schemas", () => {
  describe("contactInquirySchema", () => {
    it("should validate a correct contact inquiry input", () => {
      const valid = {
        fullName: "Marcus Weber",
        company: "Clean Energy GmbH",
        email: "m.weber@cleangrid.de",
        phone: "+49 69 98765432",
        country: "Germany",
        subject: "EPC Project Supply",
        message: "We need high-voltage transformer sourcing for our new project.",
        consent: true,
      };
      const result = contactInquirySchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email", () => {
      const invalid = {
        fullName: "Marcus Weber",
        company: "Clean Energy GmbH",
        email: "invalid-email",
        country: "Germany",
        subject: "EPC Project Supply",
        message: "We need high-voltage transformer sourcing for our new project.",
        consent: true,
      };
      const result = contactInquirySchema.safeParse(invalid);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.email).toBeDefined();
      }
    });

    it("should reject short messages", () => {
      const invalid = {
        fullName: "Marcus Weber",
        company: "Clean Energy GmbH",
        email: "m.weber@cleangrid.de",
        country: "Germany",
        subject: "EPC Project Supply",
        message: "Too short",
        consent: true,
      };
      const result = contactInquirySchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it("should reject missing consent", () => {
      const invalid = {
        fullName: "Marcus Weber",
        company: "Clean Energy GmbH",
        email: "m.weber@cleangrid.de",
        country: "Germany",
        subject: "EPC Project Supply",
        message: "We need high-voltage transformer sourcing for our new project.",
        consent: false,
      };
      const result = contactInquirySchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });

  describe("loginSchema", () => {
    it("should validate a correct login input", () => {
      const valid = {
        email: "admin@takniser.de",
        password: "securepassword123",
      };
      const result = loginSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it("should reject short passwords", () => {
      const invalid = {
        email: "admin@takniser.de",
        password: "123",
      };
      const result = loginSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });
  });
});

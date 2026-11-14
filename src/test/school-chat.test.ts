import { describe, expect, it } from "vitest";
import { schoolChatReply } from "@/lib/school-chat";

describe("school information assistant", () => {
  it("answers school enquiries using the school name and confirmed contact number", () => {
    expect(schoolChatReply("What is your phone number?")).toContain("+91 95130 01414");
  });
  it("does not invent a fee quote", () => {
    expect(schoolChatReply("What are the fees?")).toContain("contact our admissions team");
  });
});
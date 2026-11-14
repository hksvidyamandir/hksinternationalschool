import { describe, expect, it } from "vitest";
import { SITE } from "@/lib/site";
import { schoolChatReply } from "@/lib/school-chat";

describe("confirmed school contact details", () => {
  it("uses the supplied school email", () => {
    expect(SITE.email).toBe("hksvidyamandir@gmail.com");
    expect(schoolChatReply("Email address?")).toContain("hksvidyamandir@gmail.com");
  });
  it("adds the first screenshot number as a callable contact", () => {
    expect(SITE.phones).toContainEqual({ label: "+91 95130 01414", href: "tel:+919513001414" });
    expect(schoolChatReply("Phone number?")).toContain("+91 95130 01414");
  });
  it("adds the second screenshot number as a callable contact", () => {
    expect(SITE.phones).toContainEqual({ label: "+91 95130 01818", href: "tel:+919513001818" });
    expect(schoolChatReply("Phone number?")).toContain("+91 95130 01818");
  });
});
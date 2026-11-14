import { describe, expect, it } from "vitest";
import { SITE } from "@/lib/site";
import { schoolChatReply } from "@/lib/school-chat";

describe("confirmed school contact details", () => {
  it("removes the former number from calls and WhatsApp", () => {
    expect(JSON.stringify(SITE)).not.toContain("82770");
    expect(SITE.phoneHref).toBe("tel:+919513001414");
    expect(SITE.whatsapp).toBe("https://wa.me/919513001414");
    expect(SITE.phones).toHaveLength(2);
  });
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
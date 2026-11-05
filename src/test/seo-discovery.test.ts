import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const origin = "https://hksinternationalschool.lovable.app";

describe("Public search discovery", () => {
  it("directs crawlers to the published site's sitemap", () => {
    const robots = readFileSync("public/robots.txt", "utf8");
    const directives = [...robots.matchAll(/^Sitemap:\s*(\S+)/gm)].map((match) => match[1]);
    expect(directives).toEqual([`${origin}/sitemap.xml`]);
  });

  it("lists all 13 school pages on the published domain", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
    const paths = ["/", "/about", "/leadership", "/why-hks", "/academics", "/experiential-learning", "/competitive-exams", "/sports", "/campus-life", "/boarding", "/campus", "/admissions", "/contact"];
    expect(locations).toEqual(paths.map((path) => `${origin}${path}`));
  });
});
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProgrammeSelector } from "@/components/site/ProgrammeSelector";
import { programmePhotos } from "@/lib/programme-photos";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
vi.stubGlobal("IntersectionObserver", class { observe() {} unobserve() {} disconnect() {} });
vi.stubGlobal("ResizeObserver", class { observe() {} unobserve() {} disconnect() {} });
afterEach(cleanup);

describe("Programme selection", () => {
  const choices = ["Early Years", "Primary", "High School", "Senior Secondary"];
  const images = [programmePhotos.early, programmePhotos.primary, programmePhotos.high, programmePhotos.senior];
  choices.forEach((name, index) => {
    it(`shows only the linked detail and matching photo for ${name}`, () => {
      render(<ProgrammeSelector />);
      const tab = screen.getByRole("tab", { name: new RegExp(name.replace("&", "\\&")) });
      fireEvent.mouseDown(tab, { button: 0, ctrlKey: false });
      fireEvent.click(tab);
      const panel = screen.getByRole("tabpanel");
      expect(tab).toHaveAttribute("aria-selected", "true");
      expect(panel.id).toBe(tab.getAttribute("aria-controls"));
      expect(panel.getAttribute("aria-labelledby")).toBe(tab.id);
      expect(within(panel).getByRole("img")).toHaveAttribute("src", images[index]?.[0]?.src);
      const photos = panel.querySelectorAll(".programme-photo-slide img");
      expect(photos).toHaveLength(6);
      expect(new Set(Array.from(photos).map(photo => photo.getAttribute("src"))).size).toBe(6);
      expect(within(panel).getByRole("link")).toHaveAttribute("href", "/academics");
      expect(screen.getAllByRole("tab").filter(item => item.getAttribute("aria-selected") === "true")).toHaveLength(1);
    });
  });

  it("shows the four Early Years pointers on the text side", () => {
    render(<ProgrammeSelector />);
    const tab = screen.getByRole("tab", { name: /Early Years/ });
    fireEvent.click(tab);
    const panel = screen.getByRole("tabpanel");
    const items = Array.from(panel.querySelectorAll(".programme-points li"));
    expect(items).toHaveLength(4);
    expect(items.map(item => item.querySelector("h4")?.textContent)).toEqual([
      "Play-Based Learning",
      "Inquiry-Led Exploration",
      "Montessori Learning Experiences",
      "Whole-Child Development",
    ]);
    expect(items[0]?.querySelector("p")?.textContent).toContain("Purposeful play strengthens language");
    expect(items[3]?.querySelector("p")?.textContent).toContain("physical, emotional, social and creative growth");
  });

  it("shows each remaining stage's own four pointers", () => {
    render(<ProgrammeSelector />);
    const stageTitles = [
      ["Connected Learning", "Strong Literacy and Communication", "Mathematical and Scientific Thinking", "Character and Personal Growth"],
      ["Subject Depth", "Independent Enquiry", "Personal Growth", "Innovation in Action"],
      ["Subject Depth and Academic Rigour", "Personalised Educator Guidance", "College and Career Readiness", "Leadership and Personal Growth"],
    ];
    for (const [index, name] of ["Primary", "High School", "Senior Secondary"].entries()) {
      const tab = screen.getByRole("tab", { name: new RegExp(name) });
      fireEvent.mouseDown(tab, { button: 0, ctrlKey: false });
      fireEvent.click(tab);
      const panel = screen.getByRole("tabpanel");
      expect(Array.from(panel.querySelectorAll(".programme-points h4")).map(item => item.textContent)).toEqual(stageTitles[index]);
      expect(within(panel).queryByText("Play-Based Learning")).toBeNull();
    }
  });
});
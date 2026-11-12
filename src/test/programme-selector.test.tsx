import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProgrammeSelector } from "@/components/site/ProgrammeSelector";
import { img } from "@/assets/site";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);

describe("Programme selection", () => {
  const choices = ["Early Years", "Primary", "High School", "Senior Secondary"];
  const images = [img.progMontessori, img.progElementary, img.progCbse, img.progSenior];
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
      expect(within(panel).getByRole("img")).toHaveAttribute("src", images[index]);
      expect(within(panel).getByRole("link")).toHaveAttribute("href", "/academics");
      expect(screen.getAllByRole("tab").filter(item => item.getAttribute("aria-selected") === "true")).toHaveLength(1);
    });
  });
});
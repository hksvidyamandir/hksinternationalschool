import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { PillarsShowcase } from "@/components/site/PillarsShowcase";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);

describe("HKS pillars accordion", () => {
  it("initially expands Krishi and collapses the other three cards", () => {
    render(<PillarsShowcase />);
    const controls = screen.getAllByRole("button", { name: /^Open / });
    expect(controls).toHaveLength(4);
    expect(screen.getByRole("button", { name: "Open Krishi Vidya" })).toHaveAttribute("aria-expanded", "true");
    expect(controls.filter(control => control.getAttribute("aria-expanded") === "false")).toHaveLength(3);
  });
  ["Khel Vidya", "Anubhav Vidya", "Samskruti Vidya"].forEach(name => {
    it(`exclusively expands ${name} on hover, focus and tap`, () => {
      render(<PillarsShowcase />);
      const control = screen.getByRole("button", { name: `Open ${name}` });
      const article = control.closest("article");
      if (!article) throw new Error("Pillar article missing");
      for (const select of [() => fireEvent.mouseEnter(article), () => fireEvent.focus(control), () => fireEvent.click(control)]) {
        fireEvent.click(screen.getByRole("button", { name: "Open Krishi Vidya" }));
        select();
        expect(control).toHaveAttribute("aria-expanded", "true");
        expect(screen.getAllByRole("button", { name: /^Open / }).filter(item => item.getAttribute("aria-expanded") === "true")).toHaveLength(1);
        const detailId = control.getAttribute("aria-controls");
        expect(detailId ? document.getElementById(detailId)?.querySelectorAll("li") : []).toHaveLength(4);
      }
    });
  });
  it("restores the first card when the pointer leaves", () => {
    render(<PillarsShowcase />);
    const control = screen.getByRole("button", { name: "Open Khel Vidya" });
    const article = control.closest("article");
    const stage = control.closest(".curr-stage");
    if (!article || !stage) throw new Error("Pillar accordion missing");
    fireEvent.mouseEnter(article);
    fireEvent.mouseLeave(stage);
    expect(screen.getByRole("button", { name: "Open Krishi Vidya" })).toHaveAttribute("aria-expanded", "true");
    expect(control).toHaveAttribute("aria-expanded", "false");
  });
});
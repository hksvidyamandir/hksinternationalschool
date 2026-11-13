import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { PillarsShowcase } from "@/components/site/PillarsShowcase";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);

describe("HKS pillars accordion", () => {
  it("initially expands Know the Learner and collapses the other four cards", () => {
    render(<PillarsShowcase />);
    const controls = screen.getAllByRole("button", { name: /^Open / });
    expect(controls).toHaveLength(5);
    expect(screen.getByRole("button", { name: "Open Know the Learner" })).toHaveAttribute("aria-expanded", "true");
    expect(controls.filter(control => control.getAttribute("aria-expanded") === "false")).toHaveLength(4);
  });
  ["Build the Foundations", "Explore Ideas", "Apply and Express", "Reflect and Grow"].forEach(name => {
    it(`exclusively expands ${name} on hover, focus and tap`, () => {
      render(<PillarsShowcase />);
      const control = screen.getByRole("button", { name: `Open ${name}` });
      const article = control.closest("article");
      if (!article) throw new Error("Pillar article missing");
      for (const select of [() => fireEvent.mouseEnter(article), () => fireEvent.focus(control), () => fireEvent.click(control)]) {
        fireEvent.click(screen.getByRole("button", { name: "Open Know the Learner" }));
        select();
        expect(control).toHaveAttribute("aria-expanded", "true");
        expect(screen.getAllByRole("button", { name: /^Open / }).filter(item => item.getAttribute("aria-expanded") === "true")).toHaveLength(1);
        const detailId = control.getAttribute("aria-controls");
        expect(detailId ? document.getElementById(detailId)?.hidden : true).toBe(false);
      }
    });
  });
  it("restores the first card when the pointer leaves", () => {
    render(<PillarsShowcase />);
    const control = screen.getByRole("button", { name: "Open Build the Foundations" });
    const article = control.closest("article");
    const stage = control.closest(".curr-stage");
    if (!article || !stage) throw new Error("Pillar accordion missing");
    fireEvent.mouseEnter(article);
    fireEvent.mouseLeave(stage);
    expect(screen.getByRole("button", { name: "Open Know the Learner" })).toHaveAttribute("aria-expanded", "true");
    expect(control).toHaveAttribute("aria-expanded", "false");
  });
});
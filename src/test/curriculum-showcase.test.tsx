import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CurriculumShowcase } from "@/components/site/CurriculumShowcase";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(() => { cleanup(); vi.useRealTimers(); });

describe("School-stage curriculum selection", () => {
  it("starts with only the first of four cards expanded and does not auto-advance", () => {
    vi.useFakeTimers();
    render(<CurriculumShowcase />);
    const controls = screen.getAllByRole("button", { name: /^Open / });
    expect(controls).toHaveLength(4);
    expect(controls[0]).toHaveAttribute("aria-expanded", "true");
    vi.advanceTimersByTime(20000);
    expect(controls[0]).toHaveAttribute("aria-expanded", "true");
    expect(controls.filter(c => c.getAttribute("aria-expanded") === "true")).toHaveLength(1);
  });
  ["Primary School", "Middle School", "Senior School"].forEach(name => {
    it(`opens ${name} on hover, keyboard focus and tap`, () => {
      render(<CurriculumShowcase />);
      const control = screen.getByRole("button", { name: `Open ${name}` });
      for (const select of [() => fireEvent.mouseEnter(control.closest("article") as HTMLElement), () => fireEvent.focus(control), () => fireEvent.click(control)]) {
        fireEvent.click(screen.getByRole("button", { name: "Open Early Years" }));
        select();
        expect(control).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("button", { name: "Open Early Years" })).toHaveAttribute("aria-expanded", "false");
      }
    });
  });
});
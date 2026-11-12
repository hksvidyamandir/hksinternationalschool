import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScrollTop } from "@/components/site/ScrollTop";

function setScrollY(value: number) {
  Object.defineProperty(window, "scrollY", { configurable: true, writable: true, value });
  act(() => {
    window.dispatchEvent(new Event("scroll"));
  });
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  setScrollY(0);
});

describe("scroll to top control", () => {
  it("stays hidden while the page is at the top", () => {
    render(<ScrollTop />);
    expect(screen.queryByRole("button", { name: "Scroll to top" })).toBeNull();
  });

  it("appears once the page is scrolled down and returns the page to the top on click", () => {
    const scrollTo = vi.fn();
    window.scrollTo = scrollTo;
    render(<ScrollTop />);

    setScrollY(600);
    const button = screen.getByRole("button", { name: "Scroll to top" });
    fireEvent.click(button);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

    setScrollY(0);
    expect(screen.queryByRole("button", { name: "Scroll to top" })).toBeNull();
  });
});

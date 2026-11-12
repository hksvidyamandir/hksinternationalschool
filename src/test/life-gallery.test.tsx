import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LifeGallery } from "@/components/site/LifeGallery";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);

describe("School-life gallery", () => {
  it("opens the selected original photo from each of the eight gallery choices", () => {
    render(<LifeGallery />);
    const choices = screen.getAllByRole("button", { name: /^View .* photo$/ });
    expect(choices).toHaveLength(8);
    choices.forEach(choice => {
      const image = within(choice).getByRole("img");
      fireEvent.click(choice);
      expect(within(screen.getByRole("dialog")).getByRole("img")).toHaveAttribute("src", image.getAttribute("src"));
      fireEvent.click(screen.getByRole("button", { name: /^Close$/ }));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("browses forwards and backwards through the full gallery", () => {
    render(<LifeGallery />);
    fireEvent.click(screen.getByRole("button", { name: "View Sports photo" }));
    fireEvent.click(screen.getByRole("button", { name: "Next gallery photo" }));
    expect(within(screen.getByRole("dialog")).getByRole("img")).toHaveAttribute("alt", "Early Years (Nursery – Grade 2) at HKS");
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "ArrowLeft" });
    expect(within(screen.getByRole("dialog")).getByRole("img")).toHaveAttribute("alt", "Sports at HKS");
  });
});
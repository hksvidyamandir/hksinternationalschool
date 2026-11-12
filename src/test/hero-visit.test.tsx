import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { HeroFilm } from "@/components/site/HeroFilm";
import { EnquiryForm } from "@/components/site/EnquiryForm";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, search, ...props }: { children: React.ReactNode; to: string; search?: { visit?: string } }) => (
    <a href={search?.visit ? `${to}?visit=${search.visit}` : to} {...props}>{children}</a>
  ),
}));

// jsdom has neither ResizeObserver (Radix Popover positioning) nor media playback.
class ObserverStub { observe() {} unobserve() {} disconnect() {} }
globalThis.ResizeObserver = ObserverStub as unknown as typeof ResizeObserver;
HTMLMediaElement.prototype.play = () => Promise.resolve();

afterEach(cleanup);

describe("Hero visit CTA", () => {
  it("replaces Discover HKS with a Schedule a campus visit button offering two options", () => {
    render(<HeroFilm />);

    expect(screen.queryByRole("link", { name: /discover hks/i })).not.toBeInTheDocument();
    const trigger = screen.getByRole("button", { name: /schedule a campus visit/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: /schedule a virtual visit/i })).not.toBeInTheDocument();

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: /schedule a virtual visit/i })).toHaveAttribute("href", "/contact?visit=virtual");
    expect(screen.getByRole("link", { name: /campus tour/i })).toHaveAttribute("href", "/contact?visit=tour");
  });
});

describe("Visit enquiry", () => {
  it("passes the requested visit type into the enquiry message", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<EnquiryForm title="Schedule a virtual visit" visit="virtual" />);

    fireEvent.change(screen.getByPlaceholderText("Parent's name"), { target: { value: "Anitha" } });
    fireEvent.change(screen.getByPlaceholderText("Phone number"), { target: { value: "9812345678" } });
    fireEvent.change(screen.getByPlaceholderText("Student's name"), { target: { value: "Riya" } });
    fireEvent.change(screen.getAllByRole("combobox")[0]!, { target: { value: "Grade 5" } });
    fireEvent.submit(screen.getByRole("button", { name: /send enquiry/i }).closest("form")!);

    const url = String(open.mock.calls[0]?.[0] ?? "");
    expect(decodeURIComponent(url)).toContain("Visit requested: Virtual visit (online)");
    open.mockRestore();
  });
});

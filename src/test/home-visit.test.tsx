import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HomePage } from "@/components/site/HomePage";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, search, ...props }: { children: React.ReactNode; to: string; search?: { visit?: string } }) =>
    <a href={search?.visit ? `${to}?visit=${search.visit}` : to} {...props}>{children}</a>,
}));
vi.mock("@/hooks/use-home-motion", () => ({ useHomeMotion: () => ({ current: null }) }));
vi.mock("@/components/site/HeroFilm", () => ({ HeroFilm: () => null }));
vi.mock("@/components/site/VideoStack", () => ({ VideoStack: () => null }));
vi.mock("@/components/site/StudentsSpeak", () => ({ StudentsSpeak: () => null }));
vi.mock("@/components/site/ExperienceStories", () => ({ ExperienceStories: () => null }));
vi.mock("@/components/site/AdvantageStats", () => ({ AdvantageStats: () => null }));
vi.mock("@/components/site/CurriculumShowcase", () => ({ CurriculumShowcase: () => null }));
vi.mock("@/components/site/ProgrammeSelector", () => ({ ProgrammeSelector: () => null }));

class ObserverStub { observe() {} unobserve() {} disconnect() {} }
globalThis.ResizeObserver = ObserverStub as unknown as typeof ResizeObserver;
afterEach(cleanup);

describe("Homepage visit choices", () => {
  it.each(["Our Campus", "Schedule a campus visit", "Book a campus tour"])("%s offers both requested visit paths", (name) => {
    render(<HomePage />);
    fireEvent.click(screen.getByRole("button", { name }));
    const menu = within(screen.getByRole("dialog", { name: "Choose your visit" }));
    expect(menu.getByRole("link", { name: /schedule a virtual visit/i })).toHaveAttribute("href", "/contact?visit=virtual");
    expect(menu.getByRole("link", { name: /campus tour/i })).toHaveAttribute("href", "/contact?visit=tour");
    fireEvent.click(menu.getByRole("link", { name: /schedule a virtual visit/i }));
    expect(screen.queryByRole("dialog", { name: "Choose your visit" })).not.toBeInTheDocument();
  });
});
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ExperienceStories } from "@/components/site/ExperienceStories";
import film from "@/assets/hks-doodle-film.mp4.asset.json";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);
class Obs { observe() {} unobserve() {} disconnect() {} }
vi.stubGlobal("IntersectionObserver", Obs);
vi.stubGlobal("ResizeObserver", Obs);
window.matchMedia ??= (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} })) as never;

it("opens the existing school film from the third story and removes the player when closed", () => {
  render(<ExperienceStories />);
  fireEvent.click(screen.getByRole("button", { name: "Play HKS school film" }));
  const player = document.querySelector("video") as HTMLVideoElement;
  expect(player.src).toContain(film.url);
  expect(player.autoplay).toBe(true);
  expect(player.controls).toBe(true);
  fireEvent.click(screen.getByRole("button", { name: "Close" }));
  expect(document.querySelector("video")).toBeNull();
});
it("shows eight story cards in the carousel with arrows, two of them films", () => {
  render(<ExperienceStories />);
  expect(document.querySelectorAll(".experience-slide")).toHaveLength(8);
  expect(document.querySelectorAll(".experience-video-card")).toHaveLength(2);
  expect(screen.getByRole("button", { name: "Previous story" })).toBeTruthy();
  expect(screen.getByRole("button", { name: "Next story" })).toBeTruthy();
});

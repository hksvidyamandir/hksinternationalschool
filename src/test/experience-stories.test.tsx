import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ExperienceStories } from "@/components/site/ExperienceStories";
import film from "@/assets/hks-doodle-film.mp4.asset.json";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);

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
it("shows eight story cards in the staggered grid, two of them films", () => {
  render(<ExperienceStories />);
  const grid = document.querySelector(".experience-grid");
  expect(grid?.children).toHaveLength(8);
  expect(grid?.querySelectorAll(".experience-video-card")).toHaveLength(2);
});

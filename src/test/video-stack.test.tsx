import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { VideoStack } from "@/components/site/VideoStack";

afterEach(cleanup);
vi.stubGlobal("PointerEvent", MouseEvent);
window.matchMedia = vi.fn().mockReturnValue({ matches: true, addEventListener() {}, removeEventListener() {} });
HTMLElement.prototype.setPointerCapture = vi.fn();

it("advances on a left swipe without opening the film, and reverses on a right swipe", () => {
  render(<VideoStack />);
  const stage = document.querySelector(".vstack-stage");
  if (!stage) throw new Error("Video stage missing");
  fireEvent.pointerDown(stage, { clientX: 240, clientY: 100 });
  fireEvent.pointerUp(stage, { clientX: 100, clientY: 110 });
  fireEvent.click(stage);
  expect(screen.getByRole("button", { name: "Play Learning by doing" })).toBeTruthy();
  expect(document.querySelector("video")).toBeNull();
  fireEvent.pointerDown(stage, { clientX: 100, clientY: 100 });
  fireEvent.pointerUp(stage, { clientX: 240, clientY: 110 });
  expect(screen.getByRole("button", { name: "Play A day at HKS" })).toBeTruthy();
});

it("leaves selection unchanged during vertical scrolling and plays a tapped card", () => {
  render(<VideoStack />);
  const stage = document.querySelector(".vstack-stage");
  if (!stage) throw new Error("Video stage missing");
  fireEvent.pointerDown(stage, { clientX: 150, clientY: 100 });
  fireEvent.pointerUp(stage, { clientX: 160, clientY: 250 });
  fireEvent.click(screen.getByRole("button", { name: "Play A day at HKS" }));
  expect(document.querySelector("video")?.autoplay).toBe(true);
});

it("wraps the arrows across all five video cards", () => {
  render(<VideoStack />);
  fireEvent.click(screen.getByRole("button", { name: "Previous video" }));
  expect(screen.getByRole("button", { name: "Play Friends for life" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Next video" }));
  expect(screen.getByRole("button", { name: "Play A day at HKS" })).toBeTruthy();
});
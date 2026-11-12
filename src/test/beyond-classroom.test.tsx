import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { BeyondClassroom } from "@/components/site/BeyondClassroom";
vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);
it("shows all supplied topics and the added farming experience through their four Vidya selections", () => {
  render(<BeyondClassroom />);
  const expected = [
    ["Krishi Vidya", ["Experiential Learning", "Organic Farming & Gardening"]],
    ["Khel Vidya", ["Physical Education", "Welfare and Facilities"]],
    ["Anubhav Vidya", ["Laboratories", "Competitive Exams", "Olympiad Preparation", "Industry Orientation"]],
    ["Samskriti Vidya", ["Student Clubs", "Events & Celebrations"]],
  ] as const;
  for (const [name, topics] of expected) {
    fireEvent.mouseDown(screen.getByRole("tab", { name }), { button: 0, ctrlKey: false });
    const panel = within(screen.getByRole("tabpanel"));
    expect(panel.getAllByRole("link")).toHaveLength(topics.length);
    for (const topic of topics) expect(panel.getByRole("heading", { name: topic })).toBeInTheDocument();
  }
});
it("displays two distinct activity images in the initial Krishi selection", () => {
  render(<BeyondClassroom />);
  const images = within(screen.getByRole("tabpanel")).getAllByRole("img");
  expect(images).toHaveLength(2);
  expect(images[0]?.getAttribute("src")).not.toEqual(images[1]?.getAttribute("src"));
});
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { BeyondClassroom } from "@/components/site/BeyondClassroom";
vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);
it("shows exactly three relevant photo topics in each of the four Vidya selections", () => {
  render(<BeyondClassroom />);
  const expected = [
    ["Krishi Vidya", ["Experiential Learning", "Organic Farming & Gardening", "Horticulture & Sustainability"]],
    ["Khel Vidya", ["Physical Education", "Welfare and Facilities", "Yoga, Dance & Fitness"]],
    ["Anubhav Vidya", ["Laboratories", "Competitive Exams & Olympiads", "Industry Orientation"]],
    ["Samskruti Vidya", ["Student Clubs", "Events & Celebrations", "Student Performances"]],
  ] as const;
  for (const [name, topics] of expected) {
    fireEvent.mouseDown(screen.getByRole("tab", { name }), { button: 0, ctrlKey: false });
    const panel = within(screen.getByRole("tabpanel"));
    expect(panel.getAllByRole("link")).toHaveLength(3);
    expect(panel.getAllByRole("img")).toHaveLength(3);
    for (const topic of topics) expect(panel.getByRole("heading", { name: topic })).toBeInTheDocument();
  }
});
it("displays three distinct activity images in the initial Krishi selection", () => {
  render(<BeyondClassroom />);
  const sources = within(screen.getByRole("tabpanel")).getAllByRole("img").map(image => image.getAttribute("src"));
  expect(sources).toHaveLength(3);
  expect(new Set(sources).size).toBe(3);
});
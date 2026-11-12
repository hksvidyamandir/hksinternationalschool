import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { BeyondClassroom } from "@/components/site/BeyondClassroom";
vi.mock("@tanstack/react-router", () => ({ Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a> }));
afterEach(cleanup);
it("shows all nine supplied topics through their four Vidya selections", () => {
  render(<BeyondClassroom />);
  const expected = [
    ["Krishi Vidya", ["Experiential Learning"]],
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
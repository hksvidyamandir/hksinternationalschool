import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { FamilyStories } from "@/components/site/FamilyStories";

afterEach(cleanup);
const cards = () => screen.getAllByRole("button", { name: /^Read / });
const firstCard = () => {
  const card = cards()[0];
  if (!card) throw new Error("Missing first story card");
  return card;
};

describe("Family story expansion", () => {
  it("shows five cards with only the middle card expanded", () => {
    render(<FamilyStories />);
    expect(cards()).toHaveLength(5);
    expect(cards().map(card => card.getAttribute("aria-expanded"))).toEqual(["false", "false", "true", "false", "false"]);
  });
  it("expands each hovered card exclusively", () => {
    render(<FamilyStories />);
    for (const card of cards()) {
      fireEvent.mouseEnter(card);
      expect(card).toHaveAttribute("aria-expanded", "true");
      expect(cards().filter(c => c.getAttribute("aria-expanded") === "true")).toHaveLength(1);
    }
  });
  it("restores the middle card after leaving the card strip", () => {
    render(<FamilyStories />);
    fireEvent.mouseEnter(firstCard());
    const strip = cards()[0]?.parentElement;
    if (!strip) throw new Error("Missing story strip");
    fireEvent.mouseLeave(strip);
    expect(cards().map(card => card.getAttribute("aria-expanded"))).toEqual(["false", "false", "true", "false", "false"]);
  });
  it("collapses a side card as soon as the pointer leaves it", () => {
    render(<FamilyStories />);
    fireEvent.mouseEnter(firstCard());
    fireEvent.mouseLeave(firstCard());
    expect(firstCard()).toHaveAttribute("aria-expanded", "false");
    expect(cards()[2]).toHaveAttribute("aria-expanded", "true");
  });
  it("lets a phone tap expand a collapsed card before opening its story", () => {
    render(<FamilyStories />);
    fireEvent.click(firstCard());
    expect(cards()[0]).toHaveAttribute("aria-expanded", "true");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(firstCard());
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("keeps five cards and centre selection in the students view", () => {
    render(<FamilyStories />);
    fireEvent.click(screen.getByRole("tab", { name: "Students" }));
    expect(cards()).toHaveLength(5);
    expect(cards()[2]).toHaveAttribute("aria-expanded", "true");
  });
});
import type { SVGProps } from "react";

const artwork = {
  individual: <><circle cx="16" cy="10" r="4" /><path d="M9 26v-3a7 7 0 0 1 14 0v3M5 8V5h3M24 5h3v3M5 24v3h3M24 27h3v-3" /></>,
  growth: <><path d="M6 26h20M10 22v-5M16 22v-9M22 22V9M5 14l7-6 5 2 9-6M22 4h4v4" /></>,
  discovery: <><path d="M12 4h8M14 4v9L7 24a3 3 0 0 0 3 4h12a3 3 0 0 0 3-4l-7-11V4M10 20h12" /><circle cx="14" cy="23" r="1" /><path d="M5 8v4M3 10h4M25 13v4M23 15h4" /></>,
  world: <><circle cx="16" cy="16" r="11" /><ellipse cx="16" cy="16" rx="5" ry="11" /><path d="M5 16h22M8 9h16M8 23h16" /></>,
  understanding: <><path d="M16 10c-4-3-8-3-12-2v17c4-1 8-1 12 2 4-3 8-3 12-2V8c-4-1-8-1-12 2ZM16 10v17M8 13l4 1M8 18l4 1M20 14h4M20 19h4" /></>,
  belonging: <><path d="m4 14 12-9 12 9M8 13v14h16V13M12 19c0-3 4-3 4 0 0-3 4-3 4 0 0 3-4 5-4 5s-4-2-4-5Z" /></>,
  next: <><path d="M5 27h22M9 27v-6h6v6M15 27V16h6v11M21 27V11h6v16M5 15 18 4M12 4h6v6" /></>,
  care: <><path d="M16 14c-7-9-15 1 0 10 15-9 7-19 0-10ZM4 21v5l8 3h8l8-3v-5M8 24l4 2M24 24l-4 2" /></>,
};

export type AdvantageIconKind = keyof typeof artwork;

export function AdvantageIcon({ kind, ...props }: SVGProps<SVGSVGElement> & { kind: AdvantageIconKind }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{artwork[kind]}</svg>;
}
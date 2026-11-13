import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Frame({ children, ...props }: IconProps) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>;
}

export function KrishiIcon(props: IconProps) {
  return <Frame {...props}><path d="M16 22V12M16 16C9 16 6 12 7 7c6 0 9 3 9 9ZM16 12c0-6 4-9 10-8 0 6-4 9-10 8ZM4 24c8-4 16-4 24 0M5 28c7-3 15-3 22 0" /></Frame>;
}

export function KhelIcon(props: IconProps) {
  return <Frame {...props}><path d="M6 5h13v7a6.5 6.5 0 0 1-13 0ZM6 7H3v4c0 3 2 5 5 5M19 7h3v4c0 2-1 4-3 5M12.5 19v6M8 28h9M10 25h5" /><circle cx="24" cy="23" r="5" /><path d="m24 20 2 2-1 3h-3l-1-3ZM24 20v-2M26 22l3-1M25 25l2 2M22 25l-2 2M21 22l-2-1" /></Frame>;
}

export function AnubhavIcon(props: IconProps) {
  return <Frame {...props}><path d="M16 26c-4-3-8-3-12-2V10c4-1 8-1 12 2 2-1 4-2 6-2M16 12v14c4-3 8-3 12-2v-9M8 15l4 1M8 19l4 1" /><circle cx="24" cy="8" r="5" /><path d="m26 6-1 3-3 1 1-3Z" /></Frame>;
}

export function SamskritiIcon(props: IconProps) {
  return <Frame {...props}><path d="m4 13 12-8 12 8ZM7 13v12M12 13v12M20 13v12M25 13v12M5 25h22M3 29h26M16 5V2M16 2h5" /><path d="M14 25v-6a2 2 0 0 1 4 0v6" /></Frame>;
}
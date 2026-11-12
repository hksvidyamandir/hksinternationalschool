import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const SHOW_AFTER_PX = 320;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" })}
      className="scroll-top h-12 w-12 rounded-full bg-navy text-navy-foreground shadow-soft hover:bg-navy/90 hover:text-navy-foreground md:h-14 md:w-14 [&_svg]:size-6"
    >
      <ArrowUp aria-hidden="true" />
    </Button>
  );
}

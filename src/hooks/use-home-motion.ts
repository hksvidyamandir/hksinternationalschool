import { useEffect, useRef } from "react";

// Progressive enhancement: content stays visible without JavaScript or motion support.
export function useHomeMotion() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || !window.IntersectionObserver) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const selectors = [
      ".home-heading", ".home-intro-heading", ".home-intro-grid > div",
      ".home-proof-grid > div", ".home-usp-grid > article", ".home-programme-orbits",
      ".home-programme-detail", ".home-curriculum-grid > div", ".home-pillar",
      ".home-purpose-title", ".home-purpose-statements > article", ".home-values-grid > div",
      ".home-beyond-grid > a", ".home-community-story", ".home-gallery-columns > figure",
      ".home-quicklinks a", ".family-story-card", ".home-story-cards > a",
      ".home-location-grid > *", ".home-tour > .container-site", ".home-final > .container-site",
      ".experience-heading", ".experience-card",
    ].join(", ");
    const elements = Array.from(root.querySelectorAll<HTMLElement>(selectors));
    const setup = () => {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove("home-motion", "home-motion-visible");
        element.removeAttribute("data-motion-step");
      });
      root.classList.toggle("home-motion-enabled", !preference.matches);
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("home-motion-visible");
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0, rootMargin: "0px 0px -6% 0px" });
      elements.forEach(element => {
        element.classList.add("home-motion");
        const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
        element.dataset['motionStep'] = String(siblings.indexOf(element) % 4);
        // Never hide content already in view on hydration or preference changes.
        if (element.getBoundingClientRect().top < window.innerHeight * .94) {
          element.classList.add("home-motion-visible");
        } else observer?.observe(element);
      });
    };
    setup();
    preference.addEventListener("change", setup);
    // Keyboard navigation must never focus a still-hidden control.
    const revealFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      event.target.closest(".home-motion")?.classList.add("home-motion-visible");
    };
    root.addEventListener("focusin", revealFocus);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", setup);
      root.removeEventListener("focusin", revealFocus);
    };
  }, []);
  return ref;
}
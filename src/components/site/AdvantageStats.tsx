import { useEffect, useRef, useState } from "react";
import { img } from "@/assets/site";

const stats = [
  { value: 2010, suffix: "", label: "Since", title: "Our journey began", text: "Over a decade of care, courage and purposeful learning." },
  { value: 12, suffix: "", label: "Nursery -", title: "Every stage of growth", text: "From first steps to future pathways, under one roof." },
  { value: 100, suffix: "%", label: "CBSE", title: "A strong foundation", text: "Concept-based learning built on curiosity and application." },
  { value: 2, suffix: "", label: "Ways to belong", title: "Day + residential", text: "Two ways to join one caring, connected community." },
];

function Count({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!run || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
    const start = to > 1000 ? to - 40 : 0; let raf = 0; const t0 = performance.now();
    const tick = (t: number) => { const p = Math.min(1, (t - t0) / 1600); setN(Math.round(start + (to - start) * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n}</>;
}

export function AdvantageStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el || !window.IntersectionObserver) { setSeen(true); return; }
    const o = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setSeen(true); o.disconnect(); } }, { threshold: 0.25 });
    o.observe(el); return () => o.disconnect();
  }, []);
  return <div ref={ref} className={`adv-stage ${seen ? "is-in" : ""}`}>
    <img src={img.campus4} alt="Students at HKS Vidyamandir" loading="lazy" />
    <div className="adv-panels">{stats.map((s, i) => <article key={s.title} className={`adv-panel adv-panel-${i}`} style={{ ["--i" as string]: i }}>
      <small>{s.label}</small>
      <strong><Count to={s.value} run={seen} />{s.suffix}</strong>
      <h3>{s.title}</h3><p>{s.text}</p>
    </article>)}</div>
  </div>;
}

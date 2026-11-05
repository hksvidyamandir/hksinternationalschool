import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { img } from "@/assets/site";

export function PageHero({ eyebrow, title, intro, image, crumb }: { eyebrow: string; title: string; intro: string; image: string; crumb: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="container-site py-24 md:py-32 text-navy-foreground">
        <nav aria-label="Breadcrumb" className="text-xs text-navy-foreground/75 mb-4">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-1">/</span> <span>{crumb}</span>
        </nav>
        <span className="eyebrow text-gold">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl font-semibold leading-[1.05]">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-navy-foreground/85">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground text-lg">{intro}</p>}
    </div>
  );
}

export function Section({ children, tone = "default", id }: { children: ReactNode; tone?: "default" | "muted" | "cream" | "navy"; id?: string }) {
  const t = { default: "", muted: "bg-muted", cream: "bg-cream", navy: "bg-navy text-navy-foreground" }[tone];
  return <section id={id} className={`py-20 md:py-28 ${t}`}><div className="container-site">{children}</div></section>;
}

export function CardGrid({ items, cols = 3 }: { items: { title: string; text: string; icon?: ReactNode }[]; cols?: 2 | 3 | 4 }) {
  const c = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`mt-12 grid gap-5 ${c}`}>
      {items.map((it) => (
        <article key={it.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
          {it.icon && <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-primary">{it.icon}</div>}
          <h3 className="text-xl font-semibold text-navy">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
        </article>
      ))}
    </div>
  );
}

export function PillList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((i) => <li key={i} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy">{i}</li>)}
    </ul>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy"><Check className="h-3 w-3" /></span><span>{i}</span></li>
      ))}
    </ul>
  );
}

export function Split({ image, alt, children, reverse }: { image: string; alt: string; children: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="absolute -inset-3 -z-10 rounded-3xl bg-flame opacity-30 rotate-2" />
        <img src={image} alt={alt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function CtaBand({ title = "Give your child wings to succeed", text = "Admissions are open for 2026–27, from Nursery to Grade 12. Visit our Hassan campus or speak to our admissions team today." }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <img src={img.infra3} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
      <div className="container-site flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold">Admissions 2026–27</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">{title}</h2>
          <p className="mt-4 text-navy-foreground/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/admissions" hash="enquire" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-navy hover:bg-cream transition">Apply Now <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/40 px-7 py-3.5 font-bold hover:bg-navy-foreground/10 transition">Book a Campus Tour</Link>
        </div>
      </div>
    </section>
  );
}

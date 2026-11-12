import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";

const COLS = [
  { label: "Home", links: [
    { label: "Why HKS", to: "/why-hks" },
    { label: "Experiential Learning", to: "/experiential-learning" },
    { label: "Competitive Exams", to: "/competitive-exams" },
    { label: "Contact Us", to: "/contact" },
  ] },
  ...NAV.filter((g) => g.children).map((g) => ({ label: g.label, links: g.children!.map((c) => ({ label: c.label, to: c.to })) })),
  { label: "Admissions", links: [
    { label: "Admission Process", to: "/admissions" },
    { label: "Schedule a Campus Visit", to: "/contact" },
    { label: "Enquire Now", to: "/admissions" },
  ] },
];

export function SiteFooter() {
  const social = "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-navy transition hover:border-primary hover:text-primary";
  return (
    <footer className="border-t border-border bg-muted text-foreground">
      <div className="container-site grid grid-cols-1 items-center gap-6 py-10 md:flex md:flex-wrap md:justify-between">
        <Link to="/" aria-label="HKS Vidyamandir home" className="min-w-0 md:min-w-auto">
          <img src={img.logoFull} alt="HKS Vidyamandir logo" className="h-14 w-auto" width={449} height={165} />
        </Link>
        <div className="flex shrink-0 gap-2">
          <a href={SITE.phoneHref} aria-label="Call the school" className={social}><Phone className="h-4 w-4" /></a>
          <a href={`mailto:${SITE.email}`} aria-label="Email the school" className={social}><Mail className="h-4 w-4" /></a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={social}><MessageCircle className="h-4 w-4" /></a>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" aria-label="Directions" className={social}><MapPin className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="container-site border-t border-border py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {COLS.map((c) => (
            <div key={c.label}>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-navy">{c.label}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}><Link to={l.to} className="text-foreground/80 hover:text-primary">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-5xl text-sm leading-relaxed text-foreground/80">
          <strong className="text-navy">HKS Vidyamandir</strong> is a CBSE day & residential school on {SITE.address}. Founded in {SITE.founded}, HKS nurtures confident, future-ready learners from Nursery to Grade 12 — <strong className="text-navy">{SITE.tagline}</strong>.
        </p>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-border py-5 text-xs text-foreground/70 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} HKS Vidyamandir. All rights reserved.</p>
        <p className="grid min-w-0 gap-2 md:flex md:gap-3"><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a><span className="hidden md:inline">|</span><a href={`mailto:${SITE.email}`} className="min-w-0 break-all md:break-normal hover:text-primary">{SITE.email}</a></p>
      </div>
      <div aria-label="Contact the school" className="fixed bottom-5 left-3 z-40 flex flex-col gap-3 md:left-5">
        <Button asChild size="icon" className="h-12 w-12 rounded-full shadow-soft md:h-14 md:w-14 [&_svg]:size-6">
          <a href={SITE.phoneHref} aria-label="Call HKS Vidyamandir" title="Call HKS Vidyamandir">
            <Phone aria-hidden="true" />
          </a>
        </Button>
        <Button asChild size="icon" className="h-12 w-12 rounded-full shadow-soft md:h-14 md:w-14 [&_svg]:size-6">
          <a href={`${SITE.whatsapp}?text=${encodeURIComponent("Hello HKS Vidyamandir, I would like to know more about admissions")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" />
              <path d="m8.2 7.3 1.7 2.5-1.1 1.1a8.5 8.5 0 0 0 4.3 4.3l1.1-1.1 2.5 1.7c-.3 1.2-1.2 1.8-2.3 1.6-4.1-.8-7.5-4.2-8.3-8.3-.2-1.1.4-2 1.6-2.3Z" />
            </svg>
          </a>
        </Button>
      </div>
    </footer>
  );
}

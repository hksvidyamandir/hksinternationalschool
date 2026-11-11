import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone, Mail, X, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="hidden md:block bg-navy text-navy-foreground text-xs">
        <div className="container-site flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-gold"><Phone className="h-3.5 w-3.5" />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-gold"><Mail className="h-3.5 w-3.5" />{SITE.email}</a>
          </div>
          <div className="flex items-center font-bold">
            <Link to="/admissions" hash="enquire" className="px-3 hover:text-gold">Enquire Now</Link>
            <span className="opacity-50">|</span>
            <Link to="/campus" className="px-3 hover:text-gold">Campus Tour</Link>
            <span className="opacity-50">|</span>
            <Link to="/admissions" className="px-3 hover:text-gold">Application Form</Link>
            <span className="opacity-50">|</span>
            <Link to="/contact" className="pl-3 hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>

      <div className="container-site flex h-20 lg:h-24 items-center justify-between gap-6">
        <Link to="/" aria-label="HKS International School home" className="shrink-0">
          <img src={img.logoFull} alt="HKS Vidyamandir logo" className="h-14 sm:h-16 w-auto" width={421} height={290} />
        </Link>

        <div className="hidden lg:flex flex-col items-end gap-1.5">
          <div className="flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/60">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-teal" />Kenchattahalli</span>
            <span>CBSE · Nursery – Grade 12</span>
            <span>Day & Residential</span>
            <span className="text-primary">Admissions Open 2026–27</span>
          </div>
        <nav aria-label="Main" className="flex items-center gap-0.5">
          <Link to="/" className="px-3 py-2 text-sm font-semibold text-foreground hover:text-primary" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
          {NAV.map((g) =>
            g.children ? (
              <div key={g.label} className="group relative">
                <Link to={g.to} className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground hover:text-primary">
                  {g.label}<ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute right-0 top-full w-80 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-xl border border-border bg-card p-2 shadow-soft">
                    <div className="h-1 rounded-full bg-flame mb-2" />
                    {g.children.map((c) => (
                      <Link key={c.label} to={c.to} className="block rounded-lg px-3 py-2.5 hover:bg-muted">
                        <span className="block text-sm font-semibold text-navy">{c.label}</span>
                        <span className="block text-xs text-muted-foreground">{c.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={g.label} to={g.to} className="px-3 py-2 text-sm font-semibold text-foreground hover:text-primary" activeProps={{ className: "text-primary" }}>{g.label}</Link>
            ),
          )}
          <Link to="/admissions" hash="enquire" className="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:opacity-90">Apply Now</Link>
        </nav>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild className="hidden sm:inline-flex min-h-11 px-5 font-bold"><Link to="/admissions" hash="enquire">Apply Now</Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden min-h-11 min-w-11 text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="lg:hidden border-t border-border bg-card max-h-[75vh] overflow-y-auto">
          <div className="container-site py-3">
            <Link to="/" onClick={() => setOpen(false)} className="block py-3 font-semibold border-b border-border">Home</Link>
            {NAV.map((g) => (
              <div key={g.label} className="border-b border-border">
                {g.children ? (
                  <>
                    <Button variant="ghost" className="flex h-auto min-h-12 w-full items-center justify-between px-0 py-3 font-semibold" aria-expanded={expanded === g.label} onClick={() => setExpanded(expanded === g.label ? null : g.label)}>
                      {g.label}<ChevronDown className={`h-4 w-4 transition ${expanded === g.label ? "rotate-180" : ""}`} />
                    </Button>
                    {expanded === g.label && (
                      <div className="pb-3 pl-3 space-y-1">
                        {g.children.map((c) => (
                          <Link key={c.label} to={c.to} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">{c.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={g.to} onClick={() => setOpen(false)} className="block py-3 font-semibold">{g.label}</Link>
                )}
              </div>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-primary py-3 text-center font-bold text-primary-foreground">Apply Now</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

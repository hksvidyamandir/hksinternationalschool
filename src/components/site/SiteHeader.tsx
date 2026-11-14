import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, Mail, X } from "lucide-react";
import { NAV, SITE, VIDYA } from "@/lib/site";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenu = () => { setOpen(false); setExpanded(null); };

  useEffect(() => {
    if (!open) return;
    const mobile = window.matchMedia("(max-width: 767px)");
    const previousOverflow = document.body.style.overflow;
    if (mobile.matches) {
      document.body.style.overflow = "hidden";
      document.body.dataset["mobileMenu"] = "open";
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setExpanded(null);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab" && mobile.matches) {
        const items = headerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        const visible = Array.from(items ?? []).filter(el => el.getClientRects().length > 0);
        const first = visible[0];
        const last = visible[visible.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const resize = () => { if (!mobile.matches) setOpen(false); };
    mobile.addEventListener("change", resize);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mobile.removeEventListener("change", resize);
      document.body.style.overflow = previousOverflow;
      delete document.body.dataset["mobileMenu"];
    };
  }, [open]);

  return (
    <header ref={headerRef} className="site-header sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="site-topbar hidden md:block bg-gold text-ink text-xs">
        <div className="container-site flex min-h-9 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {SITE.phones.map((phone) => <a key={phone.href} href={phone.href} className="flex items-center gap-1.5 hover:text-navy"><Phone className="h-3.5 w-3.5" />{phone.label}</a>)}
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

      <div className="site-header-main container-site grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between md:gap-6 lg:h-24">
        <Link to="/" aria-label="HKS Vidyamandir home" className="min-w-0 shrink-0 md:min-w-auto">
          <img src={img.logoFull} alt="HKS Vidyamandir logo" className="block h-14 w-auto max-w-full object-contain sm:h-16" width={473} height={189} />
        </Link>

        <div className="hidden lg:flex flex-col items-end gap-1.5">
          <div className="flex w-full flex-nowrap items-center justify-end gap-3 border-b border-border pb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/60 xl:gap-5">
            {VIDYA.map((v) => (
              <span key={v.label} className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-foreground/80">
                <v.icon className={`h-5 w-5 shrink-0 ${v.tone}`} />
                {v.label}
              </span>
            ))}
            <span className="hidden whitespace-nowrap min-[1600px]:inline">CBSE · Nursery - Grade 12</span>
            <span className="hidden whitespace-nowrap min-[1600px]:inline">Day & Residential</span>
            <span className="whitespace-nowrap font-medium text-foreground/80">Admissions Open 2026-27</span>
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
          <Button asChild className="ml-2 rounded-full px-5 font-bold"><Link to="/admissions" hash="enquire">Apply Now</Link></Button>
        </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Button asChild className="hidden sm:inline-flex min-h-11 px-5 font-bold"><Link to="/admissions" hash="enquire">Apply Now</Link></Button>
          <Button ref={toggleRef} variant="ghost" size="icon" className="mobile-menu-toggle lg:hidden min-h-11 min-w-11 text-navy" onClick={() => { setOpen(!open); setExpanded(null); }} aria-label="Toggle menu" aria-controls="mobile-navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile" className="lg:hidden border-t border-border bg-card max-h-[calc(100dvh-5rem)] md:max-h-[75vh] overflow-y-auto overscroll-contain">
          <div className="container-site py-3">
            <div className="flex flex-wrap items-center gap-1.5 pb-3 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-2">
              {VIDYA.map((v) => (
                <span key={v.label} className="flex min-w-0 items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground max-[768px]:min-h-11 max-[768px]:rounded-md max-[768px]:px-2 max-[768px]:text-[11px] max-[768px]:tracking-normal">
                  <v.icon className={`h-5 w-5 shrink-0 ${v.tone}`} />
                  {v.label}
                </span>
              ))}
            </div>
            <div className="hidden border-b border-border pb-3 text-xs font-medium text-foreground/80 max-[768px]:block">Admissions Open 2026-27</div>
            <Link to="/" onClick={closeMenu} className="block py-3 font-semibold border-b border-border">Home</Link>
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
                          <Link key={c.label} to={c.to} onClick={closeMenu} className="flex min-h-11 items-center py-2 md:block md:min-h-0 md:py-1.5 text-sm text-muted-foreground hover:text-primary">{c.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={g.to} onClick={closeMenu} className="block py-3 font-semibold">{g.label}</Link>
                )}
              </div>
            ))}
            <Button asChild className="mt-4 min-h-11 w-full rounded-full font-bold"><Link to="/admissions" onClick={closeMenu}>Apply Now</Link></Button>
            <div className="hidden border-t border-border mt-4 pt-3 max-[768px]:block">
              <div className="grid grid-cols-2 gap-x-3 text-sm font-semibold">
                <Link to="/admissions" hash="enquire" onClick={closeMenu} className="flex min-h-11 items-center">Enquire Now</Link>
                <Link to="/campus" onClick={closeMenu} className="flex min-h-11 items-center">Campus Tour</Link>
                <Link to="/admissions" onClick={closeMenu} className="flex min-h-11 items-center">Application Form</Link>
                <Link to="/contact" onClick={closeMenu} className="flex min-h-11 items-center">Contact</Link>
              </div>
              <div className="mt-2 border-t border-border pt-2">
                {SITE.phones.map((phone) => <a key={phone.href} href={phone.href} className="flex min-h-11 items-center gap-2 text-sm text-navy"><Phone className="h-4 w-4 shrink-0" />{phone.label}</a>)}
                <a href={`mailto:${SITE.email}`} className="grid min-h-11 grid-cols-[auto_minmax(0,1fr)] items-center gap-2 text-xs text-navy"><Mail className="h-4 w-4 shrink-0" /><span className="min-w-0 break-all">{SITE.email}</span></a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

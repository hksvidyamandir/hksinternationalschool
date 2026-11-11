import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="h-1 bg-flame" />
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl font-semibold">HKS International School</p>
          <p className="mt-1 text-gold italic">{SITE.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground">
            A CBSE day & residential school in Hassan, Karnataka — nurturing confident, future-ready learners from Nursery to Grade 12 since {SITE.founded}.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-gold"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{SITE.address}</a>
            <a href={SITE.phoneHref} className="flex gap-2 hover:text-gold"><Phone className="h-4 w-4" />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-gold"><Mail className="h-4 w-4" />{SITE.email}</a>
            <p className="flex gap-2"><Clock className="h-4 w-4" />{SITE.hours}</p>
          </div>
        </div>
        {NAV.filter((g) => g.children).map((g) => (
          <div key={g.label}>
            <p className="font-display text-lg font-semibold text-gold">{g.label}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {g.children?.map((c) => (
                <li key={c.label}><Link to={c.to} className="text-navy-foreground hover:text-gold">{c.label}</Link></li>
              ))}
              {g.label === "About" && (
                <>
                  <li><Link to="/admissions" className="text-navy-foreground hover:text-gold">Admissions</Link></li>
                  <li><Link to="/contact" className="text-navy-foreground hover:text-gold">Contact Us</Link></li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-navy-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} HKS International School, Hassan. All rights reserved.</p>
          <p>Best CBSE Residential School in Hassan, Karnataka</p>
        </div>
      </div>
      <a href={`${SITE.whatsapp}?text=${encodeURIComponent("Hello HKS International School, I would like to know more about admissions")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft hover:scale-105 transition">
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
}

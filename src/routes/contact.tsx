import { createFileRoute } from "@tanstack/react-router";
import { Bus, Clock, Mail, MapPin, Phone } from "lucide-react";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PageHero, Section } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us – Visit Our Campus", "Contact HKS Vidyamandir, NH 75, Kenchattahalli. Call +91 82770 78474 or email hksinternationalschool417@gmail.com to book a campus tour.", "/contact"),
  component: Contact,
});

function Contact() {
  const cards = [
    { i: <Phone />, t: "Call us", v: SITE.phone, h: SITE.phoneHref },
    { i: <Mail />, t: "Email us", v: SITE.email, h: `mailto:${SITE.email}` },
    { i: <MapPin />, t: "Our location", v: SITE.address, h: SITE.mapsUrl },
    { i: <Clock />, t: "Office hours", v: SITE.hours },
    { i: <Bus />, t: "Transport", v: "School buses across the city and nearby villages." },
  ];
  return (
    <>
      <PageHero crumb="Contact" eyebrow="Get in touch" title="We'd love to welcome you" intro="Education for a better tomorrow — reach out, visit, or send us an enquiry." image={img.infra5} />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-none gap-10 lg:grid-cols-2">
          <div className="min-w-0 md:min-w-auto space-y-4">
            {cards.map((c) => {
              const inner = (<><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream text-primary">{c.i}</span><span className="min-w-0 md:min-w-auto"><span className="block text-sm font-bold uppercase tracking-wider text-flame">{c.t}</span><span className="block text-navy font-semibold [overflow-wrap:anywhere] md:[overflow-wrap:break-word]">{c.v}</span></span></>);
              return c.h ? <a key={c.t} href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="grid grid-cols-[auto_minmax(0,1fr)] md:flex gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition">{inner}</a> : <div key={c.t} className="grid grid-cols-[auto_minmax(0,1fr)] md:flex gap-4 rounded-2xl border border-border bg-card p-5">{inner}</div>;
            })}
          </div>
          <EnquiryForm title="Send us a message" />
        </div>
        <iframe title="Map to HKS Vidyamandir" src={SITE.mapsEmbed} loading="lazy" className="mt-12 h-[420px] w-full rounded-3xl border-0 shadow-soft" />
      </Section>
    </>
  );
}

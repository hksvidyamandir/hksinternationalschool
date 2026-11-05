import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Sparkles, FlaskConical, Globe2, Building2, Trophy, HeartHandshake, MapPin, Quote } from "lucide-react";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { CtaBand, Section, SectionHead, Split, CheckList } from "@/components/site/blocks";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Best CBSE Residential School in Hassan",
      "HKS International School, Hassan — CBSE day & residential school from Nursery to Grade 12. NEET/JEE foundation, modern labs, sports and boarding. Admissions open 2026–27.",
      "/",
    ),
  component: Home,
});

const usps = [
  { icon: <Users />, t: "Personalised Attention", d: "Small class sizes so every child is seen, heard and guided." },
  { icon: <Sparkles />, t: "Holistic Development", d: "Academics balanced with arts, sport and character." },
  { icon: <FlaskConical />, t: "Hands-On Learning", d: "Labs, VR/AR rooms and real-world projects." },
  { icon: <Globe2 />, t: "Global Exposure", d: "International test prep, MUN and cultural exchange." },
  { icon: <BookOpen />, t: "Innovative Teaching", d: "Concept-based, application-oriented CBSE pedagogy." },
  { icon: <Building2 />, t: "Modern Facilities", d: "Smart classrooms, hostels and expansive green campus." },
  { icon: <Trophy />, t: "Competitive Edge", d: "NEET & JEE foundation and Olympiads from early grades." },
  { icon: <HeartHandshake />, t: "Individual Support", d: "Remedial and advanced tracks tailored to each learner." },
];

const programmes = [
  { t: "Early Years", g: "Nursery – Grade 2", i: img.progMontessori, d: "Play-based, multi-level foundation aligned with ECCE." },
  { t: "Primary School", g: "Grade 3 – 5", i: img.progElementary, d: "Exploration, literacy, numeracy and curiosity." },
  { t: "Middle & High School", g: "Grade 6 – 10", i: img.progCbse, d: "Deep concepts, coding, AI and NEET/JEE foundation." },
  { t: "Senior Secondary", g: "Grade 11 – 12", i: img.progSenior, d: "Science & Commerce streams with career guidance." },
];

const pillars = [
  { t: "Experiential Learning", to: "/experiential-learning" as const, i: img.infra2 },
  { t: "Sports & Fitness", to: "/sports" as const, i: img.campus4 },
  { t: "Residential Life", to: "/boarding" as const, i: img.infra4 },
  { t: "Student Development", to: "/campus-life" as const, i: img.campus3 },
];

const testimonials = [
  { n: "Dr. Maimoona Arshi", r: "Parent of Abdul Majeeb", q: "HKSIS has excellent infrastructure in a serene environment, with highly qualified staff. Teachers always go that extra mile to bring out the best in every child. I would recommend this esteemed institution to anyone seeking all-round development." },
  { n: "Mr. Kariappa", r: "Parent of Lakshitha", q: "HKS has provided a strong academic foundation supported by well-trained teachers. Concepts are explained clearly with personal attention, and there's a good balance of academics, sports and cultural activities. I feel I made a good decision." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={img.campus1} alt="HKS International School campus in Hassan" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site flex min-h-[82vh] flex-col justify-end pb-20 pt-32 text-navy-foreground">
          <span className="eyebrow text-gold">CBSE · Day & Residential · Since {SITE.founded}</span>
          <h1 className="mt-4 max-w-4xl text-5xl md:text-7xl font-semibold leading-[1.02]">
            Inspiring education at the <em className="text-gold not-italic">best school in Hassan</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-navy-foreground/85">
            From Nursery to Grade 12, HKS International School gives every child the roots of strong academics and the wings to soar.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/admissions" hash="enquire" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-navy hover:bg-cream transition">Admissions 2026–27 <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/campus" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/40 px-7 py-3.5 font-bold hover:bg-navy-foreground/10 transition">Explore the Campus</Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-navy text-navy-foreground">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-foreground/10">
          {[["15+", "Years of excellence"], ["N–12", "Nursery to Grade 12"], ["CBSE", "Curriculum"], ["24×7", "Residential care"]].map(([a, b]) => (
            <div key={b} className="px-4 py-7 text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold text-gold">{a}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-navy-foreground/70">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome */}
      <Section>
        <Split image={img.welcome} alt="Students at HKS International School">
          <span className="eyebrow">Welcome to HKS</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy leading-tight">Shaping confident, responsible, future-ready leaders</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Since 2010, HKS International School has offered a stable, inclusive, English-medium learning environment on the Bengaluru–Mangaluru highway in Hassan. We believe education is not just about marks — it's about character, curiosity and the courage to dream.
          </p>
          <CheckList items={["CBSE curriculum with concept-based learning", "Integrated NEET, JEE & Olympiad foundation", "Full and weekday residential options", "All-weather access for students across Hassan district"]} />
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">Discover our story <ArrowRight className="h-4 w-4" /></Link>
        </Split>
      </Section>

      {/* USPs */}
      <Section tone="cream">
        <SectionHead center eyebrow="Right choice for your child" title="Our academic excellence" intro="Eight reasons families across Karnataka choose HKS." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.t} className="rounded-2xl bg-card p-6 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">{u.icon}</div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{u.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Programmes */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Our academic offerings" title="Programmes for every stage" />
          <Link to="/academics" className="inline-flex items-center gap-2 font-bold text-primary">View curriculum <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p) => (
            <Link key={p.t} to="/academics" className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-hidden"><img src={p.i} alt={`${p.t} at HKS International School`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-flame">{p.g}</p>
                <h3 className="mt-1 text-xl font-semibold text-navy">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Vision & mission */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <span className="eyebrow text-gold">Who we are</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Dream it. Learn it. Achieve it.</h2>
          </div>
          <div className="rounded-2xl border border-navy-foreground/15 p-7">
            <h3 className="text-2xl font-semibold text-gold">Our Vision</h3>
            <p className="mt-3 text-navy-foreground/80">To be a centre of excellence that nurtures globally competent, culturally rooted and compassionate citizens who lead with integrity.</p>
          </div>
          <div className="rounded-2xl border border-navy-foreground/15 p-7">
            <h3 className="text-2xl font-semibold text-gold">Our Mission</h3>
            <p className="mt-3 text-navy-foreground/80">To deliver accessible, holistic, high-quality education through concept-based learning, modern facilities and individual care for every learner.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {["Integrity", "Excellence", "Respect", "Curiosity", "Compassion", "Discipline"].map((v) => (
            <span key={v} className="rounded-full bg-navy-foreground/10 px-5 py-2 text-sm font-semibold">{v}</span>
          ))}
        </div>
      </Section>

      {/* Beyond classroom */}
      <Section>
        <SectionHead center eyebrow="Beyond the classroom" title="Where every talent finds its wings" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link key={p.t} to={p.to} className="group relative isolate block aspect-[3/4] overflow-hidden rounded-2xl">
              <img src={p.i} alt={p.t} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-hero-overlay" />
              <div className="flex h-full flex-col justify-end p-6 text-navy-foreground">
                <h3 className="text-2xl font-semibold">{p.t}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold">Explore <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Achievers */}
      <Section tone="muted">
        <SectionHead eyebrow="Our pride" title="Achievers & campus moments" />
        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {[img.topper1, img.topper2, img.topper3, img.topper4, img.topper5, img.campus5].map((s, i) => (
            <img key={i} src={s} alt="HKS International School students and achievers" loading="lazy" className="mb-4 w-full rounded-2xl shadow-soft" />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="cream">
        <SectionHead center eyebrow="Hear from families" title="What our parents say" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.n} className="rounded-3xl bg-card p-8 shadow-soft">
              <Quote className="h-10 w-10 text-gold" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">{t.q}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-bold text-navy">{t.n}</p>
                <p className="text-sm text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="eyebrow">Visit us</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy">Schedule a school tour</h2>
            <p className="mt-4 text-lg text-muted-foreground">See our classrooms, labs, hostels and playgrounds in person. Our admissions team will walk you through everything.</p>
            <p className="mt-6 flex gap-2 text-navy"><MapPin className="h-5 w-5 shrink-0 text-flame" />{SITE.address}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground hover:bg-navy transition">Book a Visit</Link>
              <a href={SITE.phoneHref} className="rounded-full border border-border px-7 py-3.5 font-bold text-navy hover:bg-muted transition">Call {SITE.phone}</a>
            </div>
          </div>
          <iframe title="HKS International School location map" src={SITE.mapsEmbed} loading="lazy" className="h-96 w-full rounded-3xl border-0 shadow-soft" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

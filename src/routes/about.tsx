import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CheckList, CtaBand, PageHero, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us – Our Story, Vision & Values", "Learn about HKS International School: our legacy since 2010, vision, mission, philosophy, core values and holistic CBSE education.", "/about"),
  component: About,
});

const timeline = [
  ["2010", "HKS International School founded in Kenchattahalli with an English-medium CBSE vision."],
  ["2014", "Residential programme launched, welcoming students from across Karnataka."],
  ["2018", "Middle & High School expansion with modern science and computer labs."],
  ["2022", "Senior Secondary (Grade 11–12) and integrated NEET/JEE foundation introduced."],
  ["2026", "Experiential learning centres, VR/AR rooms and flexi-boarding for a new decade."],
];

function About() {
  return (
    <>
      <PageHero crumb="About" eyebrow="Our story" title="Strengthening your wings of success" intro="Since 2010 HKS International School has empowered learners across the district with consistent, accessible and holistic education." image={img.acad1} />
      <Section>
        <Split image={img.acad4} alt="HKS International School academic block">
          <SectionHead eyebrow="Our legacy" title="A decade-plus of commitment to progress" />
          <p className="mt-5 text-muted-foreground text-lg">Located in rural Karnataka on the Bengaluru–Mangaluru highway, HKS ensures uninterrupted learning with all-weather accessibility. Our comprehensive curriculum supports growth from early learning to senior secondary, nurturing future-ready students who carry strong values wherever they go.</p>
          <p className="mt-4 text-muted-foreground">Our motto, <strong className="text-navy">"Strengthening Your Wings of Success"</strong>, reflects our promise: to give every child roots of discipline and knowledge, and wings of confidence and creativity.</p>
        </Split>
      </Section>
      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-soft"><h2 className="text-3xl font-semibold text-navy">Our Vision</h2><p className="mt-3 text-muted-foreground">To be a centre of excellence that nurtures globally competent, culturally rooted and compassionate citizens who lead with integrity.</p></div>
          <div className="rounded-3xl bg-card p-8 shadow-soft"><h2 className="text-3xl font-semibold text-navy">Our Mission</h2><p className="mt-3 text-muted-foreground">To deliver accessible, holistic, high-quality education through concept-based learning, modern facilities and individual care for every learner.</p></div>
        </div>
      </Section>
      <Section>
        <SectionHead center eyebrow="What guides us" title="Our core values" />
        <CardGrid cols={3} items={[
          { title: "Integrity", text: "Honesty and responsibility in every action, inside and outside the classroom." },
          { title: "Excellence", text: "High standards in academics, sport and the arts — always our personal best." },
          { title: "Respect", text: "Valuing every culture, opinion and individual in our diverse community." },
          { title: "Curiosity", text: "Asking questions, exploring ideas and loving the journey of learning." },
          { title: "Compassion", text: "Kindness towards people and care for the environment we share." },
          { title: "Discipline", text: "Structured routines that build focus, resilience and self-reliance." },
        ]} />
      </Section>
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our approach" title="Philosophy of education" />
            <p className="mt-5 text-muted-foreground">We believe children learn best when they do, explore and reflect. Our teaching methodology blends the CBSE framework with activity-based, concept-driven and application-oriented learning.</p>
            <CheckList items={["Practical understanding over rote memorisation", "Continuous formative assessment and feedback", "Multi-disciplinary and skill-based modules", "Equal emphasis on mental and physical well-being", "Creativity encouraged from the nursery level"]} />
          </div>
          <div>
            <SectionHead eyebrow="Milestones" title="Our journey" />
            <ol className="mt-8 border-l-2 border-gold pl-6 space-y-6">
              {timeline.map(([y, t]) => (
                <li key={y} className="relative"><span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-flame" /><p className="font-display text-xl font-semibold text-navy">{y}</p><p className="text-muted-foreground">{t}</p></li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Link to="/leadership" className="group rounded-3xl bg-navy p-8 text-navy-foreground"><h3 className="text-2xl font-semibold">Leadership messages</h3><p className="mt-2 text-navy-foreground/75">Hear from our Chairman and Principal.</p><span className="mt-4 inline-flex items-center gap-1 font-bold text-gold">Read <ArrowRight className="h-4 w-4" /></span></Link>
          <Link to="/why-hks" className="group rounded-3xl bg-cream p-8"><h3 className="text-2xl font-semibold text-navy">Why choose HKS?</h3><p className="mt-2 text-muted-foreground">What makes us the best school in Karnataka.</p><span className="mt-4 inline-flex items-center gap-1 font-bold text-primary">Discover <ArrowRight className="h-4 w-4" /></span></Link>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

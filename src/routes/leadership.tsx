import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CtaBand, PageHero, Section, SectionHead } from "@/components/site/blocks";

export const Route = createFileRoute("/leadership")({
  head: () => seo("Leadership - Chairman & Principal Messages", "Messages from the Chairman and Principal of HKS Vidyamandir, and an introduction to our academic leadership and faculty.", "/leadership"),
  component: Leadership,
});

const messages = [
  { role: "Message from the Chairman", body: "When we founded HKS Vidyamandir in 2010, our dream was simple: to bring world-class, values-driven education to the children of rural Karnataka. Today, that dream lives in every classroom, laboratory and playground on our campus. We remain committed to giving every child the roots of strong character and the wings to pursue their highest ambitions." },
  { role: "Principal's Message", body: "At HKS, we see each child as unique. Our dedicated teachers combine the rigour of the CBSE curriculum with experiential learning, ensuring students understand concepts deeply and apply them confidently. Together with parents, we nurture disciplined, curious and compassionate young people who are ready for the world." },
];

function Leadership() {
  return (
    <>
      <PageHero crumb="Leadership" eyebrow="Leadership" title="Guided by purpose, led with care" intro="The people who shape the HKS experience every day." image={img.acad2} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {messages.map((m) => (
            <article key={m.role} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
              <Quote className="h-10 w-10 text-gold" />
              <h2 className="mt-4 text-3xl font-semibold text-navy">{m.role}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{m.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="cream">
        <SectionHead center eyebrow="Our people" title="Academic leadership & faculty" intro="Highly qualified, experienced and caring educators who go the extra mile." />
        <CardGrid cols={4} items={[
          { title: "Qualified Teachers", text: "Subject specialists trained in CBSE pedagogy and child development." },
          { title: "Continuous Training", text: "Regular workshops on new methods, technology and assessment." },
          { title: "Mentorship", text: "Every student has a mentor tracking academic and personal growth." },
          { title: "Residential Wardens", text: "Caring house parents supervising boarders around the clock." },
        ]} />
      </Section>
      <CtaBand />
    </>
  );
}

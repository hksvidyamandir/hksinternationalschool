import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CheckList, CtaBand, PageHero, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/boarding")({
  head: () => seo("Residential & Boarding School in Karnataka", "Full boarding and HKS Flexi-Boarding (weekday residential) programmes with safe hostels, nutritious meals and supervised study at HKS Vidyamandir.", "/boarding"),
  component: Boarding,
});

const routine = [["6:00 AM", "Wake up, yoga & fitness"], ["7:30 AM", "Breakfast"], ["8:30 AM", "Academic day"], ["4:00 PM", "Sports & clubs"], ["6:00 PM", "Supervised study hours"], ["8:00 PM", "Dinner & recreation"], ["9:30 PM", "Lights out"]];

function Boarding() {
  return (
    <>
      <PageHero crumb="Residential Programme" eyebrow="Home away from home" title="A safe, caring residential campus" intro="Choose full boarding or HKS Flexi-Boarding — a weekday residential programme ideal for working parents." image={img.infra4} />
      <Section>
        <Split image={img.infra1} alt="HKS boarding hostel">
          <SectionHead eyebrow="HKS Flexi-Boarding" title="Weekdays on campus, weekends at home" />
          <p className="mt-4 text-muted-foreground">Students stay on campus Monday to Friday, benefitting from structured routines and supervised study, and return home for weekends with family.</p>
          <CheckList items={["Comfortable, secure accommodation", "Structured daily timetable", "Academic supervision and study hours", "Clear weekend departure and return guidelines", "Regular parent–school communication"]} />
        </Split>
      </Section>
      <Section tone="cream">
        <SectionHead center eyebrow="Residential care" title="Everything your child needs" />
        <CardGrid cols={4} items={[
          { title: "Meals & Nutrition", text: "Balanced, hygienic vegetarian and nutritious meals." },
          { title: "24×7 Safety", text: "Wardens, CCTV and secure campus perimeter." },
          { title: "Health Care", text: "Infirmary and regular health check-ups." },
          { title: "Recreation", text: "Evening sports, clubs and weekend activities." },
        ]} />
      </Section>
      <Section>
        <SectionHead eyebrow="A typical day" title="Daily routine" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routine.map(([t, a]) => (
            <li key={t} className="rounded-2xl border border-border bg-card p-5"><p className="font-display text-2xl font-semibold text-primary">{t}</p><p className="mt-1 text-muted-foreground">{a}</p></li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}

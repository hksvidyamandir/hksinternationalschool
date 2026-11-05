import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CheckList, CtaBand, PageHero, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/why-hks")({
  head: () => seo("Why HKS is the Best School in Hassan", "Why families choose HKS International School: academic excellence, state-of-the-art infrastructure, safe residential campus, sports and holistic development in Hassan.", "/why-hks"),
  component: Why,
});

const reasons = [
  { t: "Academic excellence with global standards", i: img.prog_cbse ?? img.progCbse, pts: ["Strong foundation from early years", "Activity-based learning", "Practical understanding over rote memorisation", "Individual attention for every student"] },
  { t: "State-of-the-art infrastructure", i: img.infra1, pts: ["Smart classrooms", "Science, computer & robotics labs", "Library and reading spaces", "Spacious playgrounds and sports courts"] },
  { t: "Safe, caring residential campus", i: img.infra4, pts: ["Separate hostels with 24×7 supervision", "Nutritious, hygienic meals", "Supervised study hours", "Regular parent communication"] },
  { t: "Future-ready skills", i: img.campus2, pts: ["Coding, AI and app development", "NEET/JEE foundation from Grade 6", "Public speaking and leadership", "Financial literacy and life skills"] },
];

function Why() {
  return (
    <>
      <PageHero crumb="Why HKS" eyebrow="Why choose us" title="Why HKS is recognised as the best school in Hassan" intro="Education is not just about marks — it is about shaping confident, responsible and future-ready leaders." image={img.campus3} />
      {reasons.map((r, i) => (
        <Section key={r.t} tone={i % 2 ? "muted" : "default"}>
          <Split image={r.i} alt={r.t} reverse={i % 2 === 1}>
            <SectionHead eyebrow={`Reason ${i + 1}`} title={r.t} />
            <CheckList items={r.pts} />
          </Split>
        </Section>
      ))}
      <CtaBand />
    </>
  );
}

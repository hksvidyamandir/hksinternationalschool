import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/competitive-exams")({
  head: () => seo("NEET & JEE Foundation, Olympiads & SAT Prep", "Integrated NEET and JEE foundation from Grade 6, Olympiad preparation from Grade 4, and SAT, ACT, TOEFL and IELTS coaching at HKS Vidyamandir.", "/competitive-exams"),
  component: Comp,
});

function Comp() {
  return (
    <>
      <PageHero crumb="Competitive Exams" eyebrow="Competitive edge" title="Preparing champions, early and confidently" intro="Age-appropriate, integrated preparation for national and international examinations — within the school day." image={img.topper3} />
      <Section>
        <Split image={img.topper2} alt="HKS students preparing for competitive exams">
          <SectionHead eyebrow="Integrated programme" title="NEET & JEE foundation from Grade 6" />
          <p className="mt-4 text-muted-foreground">Progressive, concept-first preparation that grows with your child — no separate coaching needed.</p>
          <CheckList items={["Conceptual depth in Physics, Chemistry, Biology & Maths", "Mental ability, aptitude and logical reasoning", "Scholastic Aptitude Test (SAT) practice", "Regular mock tests and performance analytics", "Doubt-clearing sessions with subject experts"]} />
        </Split>
      </Section>
      <Section tone="cream">
        <SectionHead center eyebrow="Olympiads · Grade 4 onwards" title="Olympiad preparation" intro="Early competitive exposure builds confidence, analytical thinking and a love for challenge." />
        <CardGrid cols={3} items={[
          { title: "Mathematics (IMO)", text: "International Mathematics Olympiad training and practice papers." },
          { title: "Science (NSO)", text: "National Science Olympiad preparation with lab reinforcement." },
          { title: "English (IEO)", text: "International English Olympiad grammar, reading and vocabulary." },
          { title: "Cyber (ICSO)", text: "International Computer Science Olympiad readiness." },
          { title: "General Knowledge (IGKO)", text: "Current affairs, reasoning and world knowledge." },
          { title: "Model United Nations", text: "Diplomacy, research and public speaking on global issues." },
        ]} />
      </Section>
      <Section>
        <SectionHead center eyebrow="Study abroad" title="International test preparation" intro="Examination-wise modules, mock assessments and guidance for international university admissions." />
        <div className="flex justify-center"><PillList items={["Digital SAT", "ACT", "PSAT", "AP Examinations", "Cambridge English", "TOEFL", "IELTS"]} /></div>
      </Section>
      <CtaBand />
    </>
  );
}

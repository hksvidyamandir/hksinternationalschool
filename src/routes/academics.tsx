import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { CardGrid, CtaBand, PageHero, PillList, Section, SectionHead } from "@/components/site/blocks";

export const Route = createFileRoute("/academics")({
  head: () => seo("CBSE Curriculum - Nursery to Grade 12", "Explore the CBSE academic programme at HKS Vidyamandir: Early Years, Primary, Middle, High School and Senior Secondary with NEET/JEE foundation.", "/academics"),
  component: Academics,
});

const stages = [
  { t: "Early Years", g: "Nursery - Grade 2", i: img.early, d: "A five-year, flexible, multi-level and activity-based foundation guided by ECCE principles. Continuous formative assessment through observation and documentation helps educators understand each child's progress.", s: ["Creative Expression", "Numeracy", "Communication, Language & Literacy", "Environmental Education", "Physical Development", "Personal, Social & Emotional Development"] },
  { t: "Primary School", g: "Grade 3 - 5", i: img.primary, d: "The preparatory stage emphasises play, exploration and activity-based learning with light, concept-oriented textbooks - building strong foundations while nurturing curiosity and confidence.", s: ["English Literacy", "Numeracy", "Science & EVS", "Fine & Performing Arts", "Information Practices", "Second Languages", "Personal, Social & Physical Education"] },
  { t: "Middle School", g: "Grade 6 - 8", i: img.middle, d: "Deeper, abstract concepts across science, mathematics, arts and social sciences. Hands-on vocational crafts, 'ten bagless days', and future-ready subjects like app development, coding and AI.", s: ["Mathematics", "Science", "English", "Social Studies", "Hindi / Kannada (II & III)", "Fine Arts", "Music / Dance", "Physical Education"] },
  { t: "High School", g: "Grade 9 - 10", i: img.high, d: "A multi-disciplinary framework that sharpens critical thinking and subject expertise, with vocational pathways and cultural exchange modules to broaden global understanding.", s: ["English", "Science", "Mathematics", "Social Studies", "Hindi / Kannada", "Computer Applications"] },
  { t: "Senior Secondary", g: "Grade 11 - 12", i: img.senior, d: "Focused Science and Commerce streams with career counselling and integrated competitive exam preparation, preparing students for top universities in India and abroad.", s: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Accountancy", "Business Studies", "Economics"] },
];

function Academics() {
  return (
    <>
      <PageHero crumb="Academics" eyebrow="Scholastic" title="A CBSE journey from first steps to graduation" intro="A comprehensive curriculum that supports academic growth from early learning to senior secondary." image={img.acad3} />
      <Section>
        <SectionHead eyebrow="Grade-wise structure" title="Five stages, one continuous journey" />
        <div className="mt-12 space-y-6">
          {stages.map((s) => (
            <article key={s.t} className="grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[200px_1fr] md:p-8">
              <img src={s.i} alt={`${s.t} at HKS`} loading="lazy" className="aspect-square w-full max-w-[200px] rounded-2xl object-cover" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-flame">{s.g}</p>
                <h2 className="mt-1 text-3xl font-semibold text-navy">{s.t}</h2>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
                <PillList items={s.s} />
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="cream">
        <SectionHead center eyebrow="Subject-wise methodology" title="Beyond the textbook" />
        <CardGrid items={[
          { title: "Mathematics", text: "Foundational maths, logical reasoning and Vedic Mathematics." },
          { title: "Science", text: "Physics, Chemistry, Biology and General Science with daily lab practice." },
          { title: "English", text: "Grammar, reading, writing and confident communication." },
          { title: "Languages", text: "Hindi, Kannada and other applicable languages." },
          { title: "Computer Science", text: "Digital literacy, coding and computational thinking." },
          { title: "Mental Ability & Finance", text: "Aptitude, analytical reasoning, money management and basic economics." },
        ]} />
      </Section>
      <Section>
        <SectionHead center eyebrow="Assessment & support" title="Every learner, supported" />
        <CardGrid cols={4} items={[
          { title: "Continuous Assessment", text: "Formative and summative evaluation aligned with CBSE norms." },
          { title: "Remedial Support", text: "Small-group sessions to strengthen foundations." },
          { title: "Advanced Learning", text: "Enrichment tracks for high-achievers." },
          { title: "Brain Memory Mapping", text: "Techniques to improve recall, focus and study skills." },
        ]} />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/experiential-learning">Experiential Learning & Labs</Link></Button>
          <Button asChild className="h-auto rounded-full px-6 py-3 font-bold"><Link to="/competitive-exams">Competitive Exams & Olympiads</Link></Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

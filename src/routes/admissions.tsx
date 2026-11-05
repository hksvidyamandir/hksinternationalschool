import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CheckList, PageHero, Section, SectionHead } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/admissions")({
  head: () => seo("Admissions 2026–27 – Nursery to Grade 12", "Admissions open at HKS International School, Hassan for 2026–27. Admission process, age criteria, documents required, scholarships and enquiry form.", "/admissions"),
  component: Admissions,
});

const steps = [["Enquire", "Fill the enquiry form or call our admissions office."], ["Campus Visit", "Tour the campus and meet our team."], ["Application", "Submit the admission form with documents."], ["Interaction", "Age-appropriate interaction / assessment."], ["Confirmation", "Receive offer and complete fee payment."]];
const ages = [["Nursery", "3+ years"], ["LKG", "4+ years"], ["UKG", "5+ years"], ["Grade 1", "6+ years"], ["Grade 2 onwards", "As per CBSE norms & previous class"]];
const faqs = [
  ["When do admissions open?", "Admissions for 2026–27 are open now for Nursery to Grade 12, subject to seat availability."],
  ["Do you offer boarding?", "Yes — full boarding and HKS Flexi-Boarding (weekday residential) programmes."],
  ["Is transport available?", "Yes, school buses cover Hassan city and surrounding areas."],
  ["Are scholarships available?", "Merit-based and sibling concessions are available. Please contact the admissions office for details."],
];

function Admissions() {
  return (
    <>
      <PageHero crumb="Admissions" eyebrow="Admissions open 2026–27" title="Begin your child's HKS journey" intro="Nursery to Grade 12 · Day scholar, full boarding and flexi-boarding options." image={img.campus5} />
      <Section>
        <SectionHead center eyebrow="Admission journey" title="Five simple steps" />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-5xl font-semibold text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-navy">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="cream" id="enquire">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Requirements" title="Age criteria & documents" />
            <table className="mt-8 w-full overflow-hidden rounded-2xl bg-card text-left text-sm">
              <thead className="bg-navy text-navy-foreground"><tr><th className="p-4">Class</th><th className="p-4">Age (as on 1 June)</th></tr></thead>
              <tbody>{ages.map(([c, a]) => <tr key={c} className="border-t border-border"><td className="p-4 font-semibold text-navy">{c}</td><td className="p-4">{a}</td></tr>)}</tbody>
            </table>
            <h3 className="mt-10 text-2xl font-semibold text-navy">Documents required</h3>
            <CheckList items={["Birth certificate", "Aadhaar card of student and parents", "Previous school report card", "Transfer certificate (Grade 2 onwards)", "4 passport-size photographs", "Medical / immunisation record"]} />
          </div>
          <EnquiryForm />
        </div>
      </Section>
      <Section>
        <SectionHead center eyebrow="Support" title="Scholarships & policies" />
        <CardGrid items={[
          { title: "Merit Scholarships", text: "Recognising outstanding academic and sports achievers." },
          { title: "Sibling Concession", text: "Fee benefits for families with more than one child at HKS." },
          { title: "School Policies", text: "Clear code of conduct, attendance and fee policies shared at admission." },
        ]} />
        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-3xl font-semibold text-navy text-center">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            {faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q}><AccordionTrigger className="text-left font-semibold text-navy">{q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{a}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
}

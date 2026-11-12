import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CheckList, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/sports")({
  head: () => seo("Sports & Physical Education", "Cricket, football, basketball, archery, horse riding, skating, chess, yoga and martial arts with professional coaching at HKS Vidyamandir.", "/sports"),
  component: Sports,
});

function Sports() {
  return (
    <>
      <PageHero crumb="Sports" eyebrow="Sports & fitness" title="Strong bodies, sharp minds" intro="Sport is central to holistic development at HKS — with professional coaching, expansive grounds and inter-school competitions." image={img.campus4} />
      <Section>
        <Split image={img.infra6} alt="Sports grounds at HKS Vidyamandir">
          <SectionHead eyebrow="Why sport matters" title="Fitness, teamwork and character" />
          <CheckList items={["Professional coaches for every major sport", "Indoor and outdoor facilities on campus", "Inter-school competitions and tournaments", "Structured physical education curriculum", "Adventure and outdoor activities"]} />
        </Split>
      </Section>
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-3">
          <div><h2 className="text-3xl font-semibold text-navy">Outdoor</h2><PillList items={["Cricket", "Football", "Basketball", "Volleyball", "Athletics", "Kho-Kho", "Kabaddi", "Archery", "Skating", "Horse Riding", "Olympic Sports"]} /></div>
          <div><h2 className="text-3xl font-semibold text-navy">Indoor</h2><PillList items={["Chess", "Table Tennis", "Badminton", "Carrom", "Gymnastics", "Martial Arts", "Indoor Games"]} /></div>
          <div><h2 className="text-3xl font-semibold text-navy">Wellness</h2><PillList items={["Yoga", "Meditation", "Mindfulness", "Inner Engineering", "Aerobics", "Dance & Movement"]} /></div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

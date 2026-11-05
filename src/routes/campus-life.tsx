import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CtaBand, PageHero, PillList, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/campus-life")({
  head: () => seo("Campus Life & Student Development", "Clubs, leadership council, public speaking, arts, theatre, community service and life skills at HKS International School, Hassan.", "/campus-life"),
  component: Life,
});

function Life() {
  return (
    <>
      <PageHero crumb="Campus Life" eyebrow="Student development" title="Growing leaders, inside and out" intro="Personality, leadership, creativity and emotional intelligence — nurtured every day." image={img.campus3} />
      <Section>
        <SectionHead center eyebrow="Holistic development" title="Skills for life" />
        <CardGrid cols={4} items={[
          { title: "Leadership & Teamwork", text: "Student Leadership Council, houses and team-building camps." },
          { title: "Communication", text: "Debates, elocution and public speaking from early grades." },
          { title: "Critical Thinking", text: "Problem-solving challenges and innovation projects." },
          { title: "Emotional Intelligence", text: "Mindfulness, counselling and peer support." },
          { title: "Career Counselling", text: "Guidance on streams, careers and universities." },
          { title: "Life Skills", text: "Organic farming, horticulture and practical skills." },
          { title: "Community Service", text: "Social responsibility and outreach initiatives." },
          { title: "Creativity", text: "Art, craft, music, theatre and design." },
        ]} />
      </Section>
      <Section tone="cream">
        <Split image={img.campus2} alt="Students taking part in club activities">
          <SectionHead eyebrow="Clubs & societies" title="Find your passion" />
          <PillList items={["Debate & Public Speaking", "Creative Writing", "Reading & Literary", "Environmental", "Entrepreneurship", "Photography & Film", "Music & Performing Arts", "Theatre & Drama", "Art & Craft"]} />
        </Split>
      </Section>
      <CtaBand />
    </>
  );
}

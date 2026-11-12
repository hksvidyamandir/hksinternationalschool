import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CtaBand, PageHero, Section, SectionHead } from "@/components/site/blocks";

export const Route = createFileRoute("/campus")({
  head: () => seo("Campus & Infrastructure Gallery", "Tour the HKS Vidyamandir campus — smart classrooms, laboratories, hostels, playgrounds and green spaces.", "/campus"),
  component: Campus,
});

const gallery = [img.infra1, img.infra2, img.infra3, img.infra4, img.infra5, img.infra6, img.campus1, img.campus2, img.campus3, img.campus4, img.campus5, img.acad1];

function Campus() {
  return (
    <>
      <PageHero crumb="Campus" eyebrow="Our campus" title="Spaces designed to inspire" intro="A serene, green campus on the Bengaluru–Mangaluru highway with modern facilities for learning and living." image={img.infra3} />
      <Section>
        <SectionHead center eyebrow="Infrastructure" title="State-of-the-art facilities" />
        <CardGrid cols={4} items={[
          { title: "Smart Classrooms", text: "Digital boards and interactive content." },
          { title: "Science & Tech Labs", text: "Physics, chemistry, biology, computer and robotics." },
          { title: "Library", text: "A rich collection of books and reading corners." },
          { title: "Hostels", text: "Safe, clean residential blocks." },
          { title: "Playgrounds", text: "Cricket, football, courts and athletics." },
          { title: "Dining Hall", text: "Hygienic, nutritious meals." },
          { title: "Transport", text: "School buses covering the city and nearby areas." },
          { title: "Green Campus", text: "Gardens, organic farm and open spaces." },
        ]} />
      </Section>
      <Section tone="muted">
        <SectionHead eyebrow="Gallery" title="Life at HKS" />
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>img]:mb-4">
          {gallery.map((g, i) => <img key={i} src={g} alt="HKS Vidyamandir campus" loading="lazy" className="w-full rounded-2xl break-inside-avoid" />)}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

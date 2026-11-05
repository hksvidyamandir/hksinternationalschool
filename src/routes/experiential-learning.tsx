import { createFileRoute } from "@tanstack/react-router";
import { Atom, Bot, Brain, Code2, Cpu, FlaskConical, Leaf, Microscope, Orbit, Palette, Ruler, Wrench, Glasses, Landmark, Mic, Briefcase } from "lucide-react";
import { img } from "@/assets/site";
import { seo } from "@/lib/seo";
import { CardGrid, CheckList, CtaBand, PageHero, Section, SectionHead, Split } from "@/components/site/blocks";

export const Route = createFileRoute("/experiential-learning")({
  head: () => seo("Experiential Learning & Laboratories", "VR and AR rooms, astronomy zone, robotics, AI, STEM and science laboratories at HKS International School, Hassan — learning beyond textbooks.", "/experiential-learning"),
  component: Exp,
});

function Exp() {
  return (
    <>
      <PageHero crumb="Experiential Learning" eyebrow="Learn by doing" title="Experiential learning & laboratories" intro="Practical application of classroom concepts that builds critical thinking, engagement and lifelong curiosity." image={img.infra2} />
      <Section>
        <Split image={img.infra5} alt="Students learning hands-on at HKS">
          <SectionHead eyebrow="Beyond textbooks" title="Why experiential learning matters" />
          <CheckList items={["Turns abstract ideas into real experiences", "Develops critical thinking and problem-solving", "Increases engagement through interactive learning", "Builds collaboration, creativity and confidence", "Connects classroom knowledge to the real world"]} />
        </Split>
      </Section>
      <Section tone="cream">
        <SectionHead center eyebrow="Learning centres" title="Experiential learning zones" />
        <CardGrid cols={3} items={[
          { icon: <Glasses />, title: "Virtual Reality Room", text: "Immersive journeys through science, history and geography." },
          { icon: <Orbit />, title: "Augmented Reality Room", text: "3D models that bring textbooks to life." },
          { icon: <Atom />, title: "Astronomy & Space Zone", text: "Explore planets, stars and space science." },
          { icon: <Wrench />, title: "Innovation & Discovery Centre", text: "Prototype ideas and test solutions." },
          { icon: <Palette />, title: "Creative Arts & Design Studio", text: "Painting, crafts, design and digital art." },
          { icon: <Leaf />, title: "Sustainability Zone", text: "Environmental projects, organic farming and horticulture." },
          { icon: <Briefcase />, title: "Entrepreneurship Centre", text: "Business simulations and young-founder projects." },
          { icon: <Mic />, title: "Public Speaking & Debate", text: "Build voice, confidence and argument." },
          { icon: <Landmark />, title: "Heritage & Culture Zone", text: "Celebrate Karnataka's and India's rich heritage." },
        ]} />
      </Section>
      <Section>
        <SectionHead center eyebrow="Laboratories" title="Modern, safe, well-equipped labs" intro="Grade-wise lab activities complement classroom teaching, with strict safety guidelines and trained lab assistants." />
        <CardGrid cols={4} items={[
          { icon: <FlaskConical />, title: "Physics & Chemistry", text: "Experiments that make theory tangible." },
          { icon: <Microscope />, title: "Biology Lab", text: "Microscopy, specimens and life science investigations." },
          { icon: <Ruler />, title: "Mathematics Lab", text: "Manipulatives and models for visual maths." },
          { icon: <Code2 />, title: "Computer & Coding", text: "Programming, web and app development." },
          { icon: <Bot />, title: "Robotics Lab", text: "Build and program robots from Grade 4." },
          { icon: <Brain />, title: "AI & Machine Learning", text: "Age-appropriate AI concepts and projects." },
          { icon: <Cpu />, title: "Electronics & STEM", text: "Circuits, prototyping and tinkering." },
          { icon: <Wrench />, title: "Maker Space", text: "Design thinking, 3D design and invention." },
        ]} />
      </Section>
      <CtaBand />
    </>
  );
}

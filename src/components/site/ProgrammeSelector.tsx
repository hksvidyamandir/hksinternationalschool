import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { img } from "@/assets/site";
import { programmePhotos } from "@/lib/programme-photos";
import type { ProgrammePhoto } from "@/lib/programme-photos";
import { ProgrammeCarousel } from "@/components/site/ProgrammeCarousel";

type Programme = {
  title: string;
  grade: string;
  image: string;
  photos: ProgrammePhoto[];
  text: string;
  points?: { title: string; text: string }[];
};

const programmes: Programme[] = [
  { title: "Early Years", grade: "Nursery - Grade 2", image: img.progMontessori, photos: programmePhotos.early, text: "Small discoveries. A strong beginning. Play, stories and exploration build the foundations for a lifelong love of learning.", points: [
    { title: "Play-Based Learning", text: "Purposeful play strengthens language, early numeracy, imagination, coordination and the confidence to explore new ideas." },
    { title: "Inquiry-Led Exploration", text: "Through Quest projects, stories and hands-on investigations, children ask questions, make connections and discover how the world works." },
    { title: "Montessori Learning Experiences", text: "Scientifically designed materials develop concentration, fine motor skills, sensory awareness and independent problem-solving." },
    { title: "Whole-Child Development", text: "Art, music, movement, outdoor play and collaborative experiences support physical, emotional, social and creative growth." },
  ] },
  { title: "Primary", grade: "Grades 3 - 5", image: img.progElementary, photos: programmePhotos.primary, text: "Curiosity becomes confidence through literacy, numeracy, collaborative projects and hands-on discovery.", points: [
    { title: "Connected Learning", text: "Students connect ideas across languages, mathematics, science, social studies and technology, helping them see learning as a complete picture." },
    { title: "Strong Literacy and Communication", text: "Reading, writing, speaking and listening experiences help learners express ideas clearly, understand different viewpoints and become confident communicators." },
    { title: "Mathematical and Scientific Thinking", text: "Hands-on investigations and problem-solving develop logical reasoning, conceptual understanding and curiosity about how the world works." },
    { title: "Character and Personal Growth", text: "Arts, sport, life skills and collaborative experiences build creativity, resilience, empathy, teamwork and responsible decision-making." },
  ] },
  { title: "High School", grade: "Grades 6 - 10", image: img.progCbse, photos: programmePhotos.high, text: "Deeper understanding, independent thinking and real-world application, with coding and competitive exam foundations.", points: [
    { title: "Subject Depth", text: "Students explore languages, mathematics, science, social sciences and technology in greater detail, building strong knowledge and clear academic thinking." },
    { title: "Independent Enquiry", text: "Research, experiments and interdisciplinary projects encourage learners to ask thoughtful questions, examine evidence and form their own conclusions." },
    { title: "Personal Growth", text: "Life skills, wellbeing, arts and sport help students build self-awareness, resilience, communication and confidence during the teenage years." },
    { title: "Innovation in Action", text: "Coding, design challenges and entrepreneurship experiences give learners opportunities to create solutions, test ideas and learn through application." },
  ] },
  { title: "Senior Secondary", grade: "Grades 11 - 12", image: img.progSenior, photos: programmePhotos.senior, text: "Science and Commerce pathways that connect academic ambition with purposeful career guidance.", points: [
    { title: "Subject Depth and Academic Rigour", text: "Students study their chosen subjects in greater depth, developing analytical thinking, strong communication and the ability to apply knowledge with confidence." },
    { title: "Personalised Educator Guidance", text: "Experienced educators provide focused academic support, regular feedback and mentoring that help each learner work towards their individual potential." },
    { title: "College and Career Readiness", text: "Counselling, workshops and pathway planning help students understand their strengths, select suitable subjects and prepare for university applications and future careers." },
    { title: "Leadership and Personal Growth", text: "Service, sport, clubs and leadership opportunities build resilience, responsibility, collaboration and the confidence to contribute beyond the classroom." },
  ] },
];

export function ProgrammeSelector() {
  const [selected, setSelected] = useState("0");
  const detailRef = useRef<HTMLDivElement>(null);
  const revealDetail = () => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    window.requestAnimationFrame(() => {
      const heading = detailRef.current?.querySelector("[role='tabpanel'][data-state='active'] h3");
      if (!heading) return;
      const bounds = heading.getBoundingClientRect();
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
      if (bounds.top >= headerHeight + 16 && bounds.bottom <= window.innerHeight - 24) return;
      window.scrollTo({ top: window.scrollY + bounds.top - headerHeight - 24, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });
  };

  return (
    <section className="home-section home-programmes">
      <div className="container-site">
        <div className="home-heading"><span className="home-kicker">Our programmes</span><h2>Every age. A new possibility.</h2><p>An education that grows with your child.</p></div>
        <Tabs value={selected} onValueChange={setSelected} className="programme-selector">
          <TabsList className="home-programme-orbits" aria-label="School programmes">
            {programmes.map((programme, index) => (
              <div key={programme.title} className={`programme-choice ${selected === String(index) ? "is-selected" : ""}`}>
                <TabsTrigger value={String(index)} asChild>
                  <Button variant="ghost" onClick={revealDetail} className={`home-orbit ${selected === String(index) ? "is-active" : ""}`}>
                    <img src={programme.image} alt="" aria-hidden="true" loading="lazy" />
                    <em aria-hidden="true">0{index + 1}</em><span>{programme.title}</span><small>{programme.grade}</small>
                  </Button>
                </TabsTrigger>
                <span className="programme-selected-mark" aria-hidden="true"><Check /></span>
              </div>
            ))}
          </TabsList>
          <div className="programme-panels" ref={detailRef}>
            {programmes.map((programme, index) => (
              <TabsContent key={programme.title} value={String(index)} className={`home-programme-detail ${programme.points?.length ? "has-programme-points" : ""}`}>
                <ProgrammeCarousel title={programme.title} photos={programme.photos} />
                <div className="programme-copy">
                  <div className="programme-summary">
                  <div className="programme-detail-label"><span aria-hidden="true">0{index + 1}</span><span className="home-kicker">{programme.grade}</span></div>
                  <h3>{programme.title}</h3><p>{programme.text}</p>
                  </div>
                  <Button asChild className="home-action"><Link to="/academics">Explore the programme<ArrowUpRight /></Link></Button>
                </div>
                  {programme.points?.length ? (
                    <ul className="programme-points">
                      {programme.points.map((point, pointIndex) => (
                        <li key={point.title}><span className="programme-point-number" aria-hidden="true">0{pointIndex + 1}</span><div><h4>{point.title}</h4><p>{point.text}</p></div></li>
                      ))}
                    </ul>
                  ) : null}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
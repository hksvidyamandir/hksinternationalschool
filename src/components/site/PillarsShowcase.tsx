import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";
import gardeningImage from "@/assets/krishi-gardening.jpg";

const pillars = [
  { title: "Know the Learner", image: img.infra2, alt: "HKS Vidyamandir campus", text: "Understand each child's starting point, interests, strengths and support needs.", to: "/about" as const },
  { title: "Build the Foundations", image: img.high, alt: "Students learning in an HKS classroom", text: "Make concepts clear through teaching, modelling, practice, reading, numeracy and feedback.", to: "/academics" as const },
  { title: "Explore Ideas", image: gardeningImage, alt: "Illustrative image of hands planting a seedling", text: "Ask questions, investigate, discuss and connect ideas through age-appropriate inquiry.", to: "/experiential-learning" as const },
  { title: "Apply and Express", image: img.campus5, alt: "HKS students in a performance", text: "Use learning through projects, demonstrations, presentations, performance and problem-solving.", to: "/campus-life" as const },
  { title: "Reflect and Grow", image: img.acad3, alt: "HKS students exercising together outdoors", text: "Recognise progress, use feedback, set next steps and seek support when needed.", to: "/why-hks" as const },
];


export function PillarsShowcase() {
  const [active, setActive] = useState(0);
  const go = (direction: number) => setActive(current => (current + direction + pillars.length) % pillars.length);
  return <section className="home-section pillars-showcase" aria-labelledby="pillars-heading">
    <div className="container-site">
      <div className="curr-head home-heading">
        <span className="home-kicker">From Understanding to Confident Action</span>
        <h2 id="pillars-heading">The Proposed <em>HKS</em> Growth Pathway</h2>
        <p>Meaningful learning takes a child from first understanding to confident application. The proposed HKS Growth Pathway brings together teaching, exploration, expression and reflection.</p>
      </div>
      <p className="pathway-motto">Know the child. Build the foundations. Open up the world. Help the child reflect and grow.</p>
      <div className="curr-stage" onMouseLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setActive(0); }}>
        <Button type="button" variant="ghost" size="icon" className="curr-nav" aria-label="Previous step" onClick={() => go(-1)}><ArrowLeft /></Button>
        <div className="curr-track">
          {pillars.map((pillar, index) => <article key={pillar.title} className={`curr-card ${active === index ? "is-active" : ""}`} onMouseEnter={() => setActive(index)}>
            <img src={pillar.image} alt={pillar.alt} loading="lazy" />
            <Button type="button" variant="ghost" className="curr-select" aria-label={`Open ${pillar.title}`} aria-expanded={active === index} aria-controls={`pillar-detail-${index}`} onFocus={() => setActive(index)} onClick={() => setActive(index)} />
            <div className="curr-body">
              <h3>{pillar.title}</h3>
              <div id={`pillar-detail-${index}`} className="pillar-detail" hidden={active !== index}>
                <p>{pillar.text}</p>
                <Button asChild className="curr-cta site-cta"><Link to={pillar.to}>Explore <ArrowUpRight size={16} /></Link></Button>
              </div>
            </div>
            <span className="curr-index" aria-hidden="true">0{index + 1}</span>
          </article>)}
        </div>
        <Button type="button" variant="ghost" size="icon" className="curr-nav" aria-label="Next step" onClick={() => go(1)}><ArrowRight /></Button>
      </div>
      <div className="curr-dots">{pillars.map((pillar, index) => <Button key={pillar.title} type="button" variant="ghost" size="icon" aria-label={`Show ${pillar.title}`} aria-pressed={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} />)}</div>
    </div>
  </section>;
}
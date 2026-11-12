import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";
import gardeningImage from "@/assets/krishi-gardening.jpg";

const cards = [
  { title: "Krishi Vidya", image: gardeningImage, alt: "Illustrative gardening image of hands planting a vegetable seedling", heading: "Where Nature Becomes the Classroom", text: "Teaching students to care for the environment through meaningful experiences with nature.", points: ["Organic farming and school gardens", "Planting, sowing and harvesting", "Horticulture activities", "Sustainability and environmental awareness"], to: "/campus" as const },
  { title: "Khel Vidya", image: img.acad3, alt: "HKS students exercising together outdoors", heading: "Where Every Move Builds Character", text: "Encouraging students to stay active, develop confidence and discover the joy of sports.", points: ["Indoor and outdoor sports", "Olympic-inspired sporting activities", "Yoga, dance and fitness", "Teamwork, discipline and sportsmanship"], to: "/sports" as const },
  { title: "Anubhav Vidya", image: img.high, alt: "Students learning in an HKS classroom", heading: "Where Innovation Meets Imagination", text: "A space for young thinkers, creators and problem-solvers.", points: ["AI, robotics and coding", "STEM activities and hands-on experiments", "VR and AR learning experiences", "Maker activities and real-world projects"], to: "/experiential-learning" as const },
  { title: "Samskriti Vidya", image: img.campus5, alt: "HKS students in a cultural performance", heading: "Where Culture Creates Connections", text: "Helping students appreciate traditions, celebrate diversity and express themselves.", points: ["Festivals and cultural celebrations", "Annual events and student performances", "House activities and competitions", "Community participation and leadership opportunities"], to: "/campus-life" as const },
];

export function CurriculumShowcase() {
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive(a => (a + d + cards.length) % cards.length);
  return <section className="curr-section">
    <div className="container-site">
      <div className="curr-head home-heading">
        <span className="home-kicker">The HKS <b>curriculum</b></span>
        <h2>Our approach to learning</h2>
        <p>A carefully designed learning journey that supports students at every stage of development.</p>
      </div>
      <div className="curr-stage">
        <Button type="button" variant="ghost" size="icon" className="curr-nav" aria-label="Previous curriculum card" onClick={() => go(-1)}><ArrowLeft /></Button>
        <div className="curr-track">
          {cards.map((c, i) => <article key={c.title} className={`curr-card ${i === active ? "is-active" : ""}`} onMouseEnter={() => setActive(i)}>
            <img src={c.image} alt={c.alt} loading="lazy" />
            <Button type="button" variant="ghost" className="curr-select" aria-label={`Open ${c.title}`} aria-expanded={i === active} aria-controls={`curr-detail-${i}`} onFocus={() => setActive(i)} onClick={() => setActive(i)} />
            <div className="curr-body">
              <h3>{(() => { const w = c.title.split(" "); const first = w[1] === "&" ? w.slice(0, 2).join(" ") : (w[0] ?? ""); const rest = c.title.slice(first.length).trim(); return <><span>{first}</span> <span>{rest}</span></>; })()}</h3>
              <div id={`curr-detail-${i}`} className="curr-detail" hidden={i !== active}>
                <h4>{c.heading}</h4>
                <p>{c.text}</p>
                <ul>{c.points.map(point => <li key={point}><Check size={16} aria-hidden="true" /><span>{point}</span></li>)}</ul>
              </div>
              {i === active && <Button asChild className="curr-cta"><Link to={c.to}>Learn more <ArrowUpRight size={16} /></Link></Button>}
            </div>
            <span className="curr-index">0{i + 1}</span>
          </article>)}
        </div>
        <Button type="button" variant="ghost" size="icon" className="curr-nav" aria-label="Next curriculum card" onClick={() => go(1)}><ArrowRight /></Button>
      </div>
      <div className="curr-dots">{cards.map((c, i) => <Button key={c.title} type="button" variant="ghost" size="icon" aria-label={`Show ${c.title}`} aria-pressed={i === active} className={i === active ? "is-active" : ""} onClick={() => setActive(i)} />)}</div>
    </div>
  </section>;
}

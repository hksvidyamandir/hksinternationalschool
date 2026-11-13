import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";
import gardeningImage from "@/assets/krishi-gardening.jpg";

const pillars = [
  { title: "Krishi Vidya", image: gardeningImage, alt: "Illustrative gardening image of hands planting a vegetable seedling", heading: "Where Nature Becomes the Classroom", text: "Teaching students to care for the environment through meaningful experiences with nature.", points: ["Organic farming and school gardens", "Planting, sowing and harvesting", "Horticulture activities", "Sustainability and environmental awareness"], to: "/campus" as const },
  { title: "Khel Vidya", image: img.acad3, alt: "HKS students exercising together outdoors", heading: "Where Every Move Builds Character", text: "Encouraging students to stay active, develop confidence and discover the joy of sports.", points: ["Indoor and outdoor sports", "Olympic-inspired sporting activities", "Yoga, dance and fitness", "Teamwork, discipline and sportsmanship"], to: "/sports" as const },
  { title: "Anubhav Vidya", image: img.high, alt: "Students learning in an HKS classroom", heading: "Where Innovation Meets Imagination", text: "A space for young thinkers, creators and problem-solvers.", points: ["AI, robotics and coding", "STEM activities and hands-on experiments", "VR and AR learning experiences", "Maker activities and real-world projects"], to: "/experiential-learning" as const },
  { title: "Samskriti Vidya", image: img.campus5, alt: "HKS students in a cultural performance", heading: "Where Culture Creates Connections", text: "Helping students appreciate traditions, celebrate diversity and express themselves.", points: ["Festivals and cultural celebrations", "Annual events and student performances", "House activities and competitions", "Community participation and leadership opportunities"], to: "/campus-life" as const },
];

export function PillarsShowcase() {
  const [active, setActive] = useState(0);
  const go = (direction: number) => setActive(current => (current + direction + pillars.length) % pillars.length);
  return <section className="home-section pillars-showcase" aria-labelledby="pillars-heading">
    <div className="container-site">
      <div className="curr-head home-heading">
        <span className="home-kicker">The four pillars of learning at HKS</span>
        <h2 id="pillars-heading">The <em>HKS</em> Pillars</h2>
        <h3 className="pil-subheading">Four Experiences. One Holistic Education.</h3>
        <p>At HKS Vidyamandir, education extends beyond textbooks. Our four signature programmes give students opportunities to learn through innovation, movement, culture and nature.</p>
      </div>
      <div className="curr-stage" onMouseLeave={event => { if (!event.currentTarget.contains(document.activeElement)) setActive(0); }}>
        <Button type="button" variant="ghost" size="icon" className="curr-nav" aria-label="Previous pillar" onClick={() => go(-1)}><ArrowLeft /></Button>
        <div className="curr-track">
          {pillars.map((pillar, index) => <article key={pillar.title} className={`curr-card ${active === index ? "is-active" : ""}`} onMouseEnter={() => setActive(index)}>
            <img src={pillar.image} alt={pillar.alt} loading="lazy" />
            <Button type="button" variant="ghost" className="curr-select" aria-label={`Open ${pillar.title}`} aria-expanded={active === index} aria-controls={`pillar-detail-${index}`} onFocus={() => setActive(index)} onClick={() => setActive(index)} />
            <div className="curr-body">
              <h3><span>{pillar.title.split(" ")[0]}</span> <span>Vidya</span></h3>
              <div id={`pillar-detail-${index}`} className="pillar-detail" hidden={active !== index}>
                <h4>{pillar.heading}</h4>
                <p>{pillar.text}</p>
                <ul>{pillar.points.map(point => <li key={point}><Check size={16} aria-hidden="true" /><span>{point}</span></li>)}</ul>
                <Button asChild className="curr-cta site-cta"><Link to={pillar.to}>Explore <ArrowUpRight size={16} /></Link></Button>
              </div>
            </div>
            <span className="curr-index" aria-hidden="true">0{index + 1}</span>
          </article>)}
        </div>
        <Button type="button" variant="ghost" size="icon" className="curr-nav" aria-label="Next pillar" onClick={() => go(1)}><ArrowRight /></Button>
      </div>
      <div className="curr-dots">{pillars.map((pillar, index) => <Button key={pillar.title} type="button" variant="ghost" size="icon" aria-label={`Show ${pillar.title}`} aria-pressed={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} />)}</div>
    </div>
  </section>;
}
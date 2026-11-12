import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";
import gardeningImage from "@/assets/krishi-gardening.jpg";

const cards = [
  { title: "Krishi Vidhya", image: gardeningImage, alt: "Illustrative gardening image of hands planting a vegetable seedling", text: "Discover nature, understand how food grows, and develop respect for the land.", to: "/campus" as const },
  { title: "Khel Vidhya", image: img.acad3, alt: "HKS students exercising together outdoors", text: "Build fitness, teamwork and confidence through sport and movement.", to: "/sports" as const },
  { title: "Anubhav Vidhya", image: img.high, alt: "Students learning in an HKS classroom", text: "Learn through hands-on experiences, exploration and real-world discovery.", to: "/experiential-learning" as const },
  { title: "Samskruti Vidhya", image: img.campus5, alt: "HKS students in a cultural performance", text: "Explore culture, traditions and creative expression through art and performance.", to: "/campus-life" as const },
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
              <p id={`curr-detail-${i}`} hidden={i !== active}>{c.text}</p>
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

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { img } from "@/assets/site";

const cards = [
  { title: "Early Years", tag: "Nursery – Grade 2", image: img.progMontessori, text: "Play, stories and exploration build a joyful foundation for lifelong learning.", to: "/academics" as const },
  { title: "Primary School", tag: "Grades 3 – 5", image: img.progElementary, text: "Concept-first literacy and numeracy with hands-on projects that grow confidence.", to: "/academics" as const },
  { title: "Middle & High", tag: "Grades 6 – 10", image: img.progCbse, text: "A rigorous CBSE programme with coding, labs and real-world application.", to: "/academics" as const },
  { title: "Senior Secondary", tag: "Grades 11 – 12", image: img.progSenior, text: "Science and Commerce streams with focused career guidance.", to: "/academics" as const },
  { title: "Competitive Exams", tag: "NEET · JEE · Olympiads", image: img.acad1, text: "Integrated foundation coaching that turns ambition into direction.", to: "/competitive-exams" as const },
  { title: "Learning by Doing", tag: "Experiential learning", image: img.infra1, text: "Science, STEM and robotics that bring every concept to life.", to: "/experiential-learning" as const },
];

export function CurriculumShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d: number) => setActive(a => (a + d + cards.length) % cards.length);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => go(1), 5000);
    return () => window.clearInterval(t);
  }, [paused]);
  return <section className="curr-section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="container-site">
      <div className="curr-head home-heading">
        <span className="home-kicker">The HKS <b>curriculum</b></span>
        <h2>Our approach to learning</h2>
        <p>A carefully designed learning journey that supports students at every stage of development.</p>
      </div>
      <div className="curr-stage">
        <button type="button" className="curr-nav" aria-label="Previous" onClick={() => go(-1)}><ArrowLeft /></button>
        <div className="curr-track">
          {cards.map((c, i) => <article key={c.title} className={`curr-card ${i === active ? "is-active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}>
            <img src={c.image} alt={`${c.title} at HKS`} loading="lazy" />
            <div className="curr-body">
              <small>{c.tag}</small>
              <h3>{(() => { const w = c.title.split(" "); const first = w[1] === "&" ? w.slice(0, 2).join(" ") : (w[0] ?? ""); const rest = c.title.slice(first.length).trim(); return <><span>{first}</span> <span>{rest}</span></>; })()}</h3>
              <p>{c.text}</p>
              <Link to={c.to} className="curr-cta" tabIndex={i === active ? 0 : -1}>Learn more <ArrowUpRight size={16} /></Link>
            </div>
            <span className="curr-index">0{i + 1}</span>
          </article>)}
        </div>
        <button type="button" className="curr-nav" aria-label="Next" onClick={() => go(1)}><ArrowRight /></button>
      </div>
      <div className="curr-dots">{cards.map((c, i) => <button key={c.title} type="button" aria-label={`Show ${c.title}`} className={i === active ? "is-active" : ""} onClick={() => setActive(i)} />)}</div>
    </div>
  </section>;
}

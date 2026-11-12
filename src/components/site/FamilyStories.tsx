import { useState } from "react";
import { ArrowUpRight, Heart, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { img } from "@/assets/site";
import { voices } from "./StudentsSpeak";

const stories = [
  { name: "Dr. Maimoona Arshi", role: "Parent of Abdul Majeeb", title: "Every child’s", emphasis: "potential matters.", image: img.welcome, text: "HKSIS has excellent infrastructure in a serene environment, with highly qualified staff. Teachers always go that extra mile to bring out the best in every child. I would recommend this esteemed institution to anyone seeking all-round development." },
  { name: "Mr. Kariappa", role: "Parent of Lakshitha", title: "Strong foundations.", emphasis: "Balanced childhoods.", image: img.primary, text: "HKS has provided a strong academic foundation supported by well-trained teachers. Concepts are explained clearly with personal attention, and there's a good balance of academics, sports and cultural activities. I feel I made a good decision." },
];

const parentCards = [
  { name: "Curiosity in action", role: "School story · Learning", image: img.acad3, text: "Experiments, projects and hands-on discovery connect classroom concepts with the world beyond.", h: ["Curiosity", "in action"], editorial: true },
  { ...stories[0], h: ["Every child’s", "potential matters"], editorial: false },
  { ...stories[1], h: ["Strong", "foundations"], editorial: false },
  { name: "A place to belong", role: "School story · Residential life", image: img.infra4, text: "A school community that brings learning, friendship and residential care together.", h: ["A place", "to belong"], editorial: true },
  { name: "Creativity & expression", role: "School story · Campus life", image: img.campus3, text: "Music, dance, art and stage moments to shine.", h: ["Space", "to shine"], editorial: true },
];

export function FamilyStories() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState(2);
  const heads = [["Learning", "that clicks"], ["From playing", "to leading"], ["Ready for", "big goals"], ["A second", "home"], ["Finding", "my voice"]];
  const list = tab === 0 ? parentCards : voices.map((v, i) => ({ name: v.name, role: v.grade, image: v.image, text: v.text, h: heads[i] ?? [v.name, ""], editorial: false }));
  const story = selected === null ? undefined : list[selected];
  return <section className="exp-section family-accordion" aria-labelledby="family-stories-heading">
    <div className="container-site">
      <div className="exp-head"><div><span className="home-kicker">Hear from our families</span><h2 id="family-stories-heading">Experiences That Speak <em>for Themselves</em></h2></div>
        <div className="exp-toggle" role="tablist" aria-label="Choose voices">{["Parents", "Students"].map((t, i) => <Button variant="ghost" key={t} type="button" role="tab" aria-selected={tab === i} className={tab === i ? "is-active" : ""} onClick={() => { setTab(i); setActive(2); setSelected(null); }}>{t}</Button>)}</div>
      </div>
      <div className="exp-grid" key={tab} onMouseLeave={() => setActive(2)}>
        {list.map((item, index) => <Button variant="ghost" key={item.name} type="button" className={`exp-card ${active === index ? "is-expanded" : ""}`} aria-expanded={active === index} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(2)} onFocus={() => setActive(index)} onBlur={() => setActive(2)} onClick={() => { if (active !== index) setActive(index); else setSelected(index); }} aria-label={`Read ${item.name}’s story`}>
          <img src={item.image} alt="" loading="lazy" />
          <span className="exp-shade" aria-hidden="true" />
          <span className="exp-collapsed" aria-hidden={active === index}>{item.name}</span>
          <span className="exp-title">{item.h[0]}<strong>{item.h[1]}</strong></span>
          <span className="exp-doodle exp-doodle-a" aria-hidden="true"><Sparkles /></span>
          <span className="exp-doodle exp-doodle-b" aria-hidden="true"><Heart /></span>
          <span className="exp-play" aria-hidden="true">{item.editorial ? <Sparkles size={22} /> : <Quote size={22} />}</span>
          <span className="exp-person"><strong>{item.name}</strong><small>{item.role}</small></span>
          <span className="exp-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </Button>)}
      </div>
    </div>
    <Dialog open={Boolean(story)} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="family-story-dialog">
        {story?.editorial ? <Sparkles className="text-flame" size={36} aria-hidden="true" /> : <Quote className="text-flame" size={36} aria-hidden="true" />}
        <DialogTitle className="font-display text-2xl leading-snug">{story?.h[0]} {story?.h[1]}</DialogTitle>
        <DialogDescription>{story?.name} · {story?.role}</DialogDescription>
        <blockquote className="text-foreground text-base leading-relaxed">{story?.text}</blockquote>
      </DialogContent>
    </Dialog>
  </section>;
}
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

export function FamilyStories() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const heads = [["Every child’s", "potential matters"], ["Strong", "foundations"], ["Learning", "that clicks"], ["From playing", "to leading"], ["Ready for", "big goals"]];
  const list = tab === 0 ? stories.map(s => ({ name: s.name, role: s.role, image: s.image, text: s.text, h: [s.title.replace(/[.’]$/, ""), s.emphasis.replace(/\.$/, "")] })) : voices.slice(0, 3).map((v, i) => ({ name: v.name, role: v.grade, image: v.image, text: v.text, h: heads[i + 2]! }));
  const story = selected === null ? undefined : list[selected];
  return <section className="exp-section" aria-labelledby="family-stories-heading">
    <div className="container-site">
      <div className="exp-head"><div><span className="home-kicker">Hear from our families</span><h2 id="family-stories-heading">Experiences That Speak <em>for Themselves</em></h2></div>
        <div className="exp-toggle" role="tablist" aria-label="Choose voices">{["Parents", "Students"].map((t, i) => <button key={t} type="button" role="tab" aria-selected={tab === i} className={tab === i ? "is-active" : ""} onClick={() => setTab(i)}>{t}</button>)}</div>
      </div>
      <div className="exp-grid" key={tab}>
        {list.map((item, index) => <button key={item.name} type="button" className="exp-card" style={{ animationDelay: `${index * 90}ms` }} onClick={() => setSelected(index)} aria-label={`Read ${item.name}’s story`}>
          <img src={item.image} alt="" loading="lazy" />
          <span className="exp-shade" aria-hidden="true" />
          <span className="exp-title">{item.h[0]}<strong>{item.h[1]}</strong></span>
          <span className="exp-doodle exp-doodle-a" aria-hidden="true"><Sparkles /></span>
          <span className="exp-doodle exp-doodle-b" aria-hidden="true"><Heart /></span>
          <span className="exp-play" aria-hidden="true"><Quote size={22} /></span>
          <span className="exp-person"><strong>{item.name}</strong><small>{item.role}</small></span>
          <span className="exp-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </button>)}
      </div>
    </div>
    <Dialog open={Boolean(story)} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="family-story-dialog">
        <Quote className="text-flame" size={36} aria-hidden="true" />
        <DialogTitle className="font-display text-2xl leading-snug">{story?.h[0]} {story?.h[1]}</DialogTitle>
        <DialogDescription>{story?.name} · {story?.role}</DialogDescription>
        <blockquote className="text-foreground text-base leading-relaxed">{story?.text}</blockquote>
      </DialogContent>
    </Dialog>
  </section>;
}
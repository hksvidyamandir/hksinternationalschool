import { useState } from "react";
import { ArrowUpRight, Heart, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { img } from "@/assets/site";

const stories = [
  { name: "Dr. Maimoona Arshi", role: "Parent of Abdul Majeeb", title: "Every child’s", emphasis: "potential matters.", image: img.welcome, text: "HKSIS has excellent infrastructure in a serene environment, with highly qualified staff. Teachers always go that extra mile to bring out the best in every child. I would recommend this esteemed institution to anyone seeking all-round development." },
  { name: "Mr. Kariappa", role: "Parent of Lakshitha", title: "Strong foundations.", emphasis: "Balanced childhoods.", image: img.primary, text: "HKS has provided a strong academic foundation supported by well-trained teachers. Concepts are explained clearly with personal attention, and there's a good balance of academics, sports and cultural activities. I feel I made a good decision." },
];

export function FamilyStories() {
  const [selected, setSelected] = useState<number | null>(null);
  const story = selected === null ? undefined : stories[selected];
  return <section className="fam-section" aria-labelledby="family-stories-heading">
    <img className="fam-bg" src={img.campus1} alt="" aria-hidden="true" loading="lazy" />
    <div className="container-site">
      <div className="fam-head"><Quote className="fam-mark" aria-hidden="true" /><span className="home-kicker">Hear from our families</span><h2 id="family-stories-heading">Families <em>Speak</em></h2><p>Experiences that speak for themselves.</p></div>
      <div className="fam-grid">
        {stories.map((item, index) => <article key={item.name} className="fam-card" data-motion-step={index}>
          <div className="fam-photo"><img src={item.image} alt="Students together at HKS International School" loading="lazy" /><span className="fam-quote"><Quote size={20} /></span></div>
          <div className="fam-body">
            <p className="fam-snippet">“{item.text.split(". ")[0]}.”</p>
            <h3>{item.name}</h3>
            <div className="fam-foot"><small><Heart size={14} /> {item.role}</small><Button variant="ghost" className="fam-open" onClick={() => setSelected(index)} aria-label={`Read ${item.name}’s parent story`}><ArrowUpRight /></Button></div>
          </div>
        </article>)}
      </div>
      <div className="fam-cta"><Button className="fam-all" onClick={() => setSelected(0)}><Sparkles size={16} /> Read all testimonials</Button></div>
    </div>
    <Dialog open={Boolean(story)} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="family-story-dialog">
        <Quote className="text-flame" size={36} aria-hidden="true" />
        <DialogTitle className="font-display text-2xl leading-snug">{story?.title} {story?.emphasis}</DialogTitle>
        <DialogDescription>{story?.name} · {story?.role}</DialogDescription>
        <blockquote className="text-foreground text-base leading-relaxed">{story?.text}</blockquote>
      </DialogContent>
    </Dialog>
  </section>;
}
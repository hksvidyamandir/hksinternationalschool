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
  return <section className="home-section home-family-stories" aria-labelledby="family-stories-heading">
    <div className="container-site">
      <div className="home-section-top">
        <div className="home-heading"><span className="home-kicker">Hear from our families</span><h2 id="family-stories-heading">Experiences that speak<br />for themselves.</h2></div>
        <span className="family-stories-label"><Heart size={16} /> Parent voices</span>
      </div>
      <div className="family-stories-grid">
        {stories.map((item, index) => <Button key={item.name} variant="ghost" className="family-story-card" onClick={() => setSelected(index)} aria-label={`Read ${item.name}’s parent story`}>
          <img src={item.image} alt="Students together at HKS International School" loading="lazy" />
          <span className="family-story-shade" />
          <span className="family-story-headline">{item.title}<strong>{item.emphasis}</strong></span>
          <span className="family-story-doodles" aria-hidden="true"><Sparkles /><Heart /></span>
          <span className="family-story-open"><Quote size={23} /></span>
          <span className="family-story-person"><strong>{item.name}</strong><small>{item.role}</small><span>Read their story <ArrowUpRight size={16} /></span></span>
        </Button>)}
      </div>
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
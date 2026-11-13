import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, GraduationCap, Heart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { img } from "@/assets/site";

export const voices = [
  { name: "Ananya R.", grade: "Grade 10 student", image: img.campus2, text: "My teachers explain every concept until it really clicks. The labs and projects make science my favourite subject, and I feel ready for my board exams." },
  { name: "Rohan K.", grade: "Grade 8 student", image: img.campus4, text: "Sports practice every evening has made me fitter and more confident. I captained our team this year and learnt how to lead others." },
  { name: "Diya S.", grade: "Grade 12 student", image: img.progSenior, text: "The NEET foundation classes alongside regular CBSE studies saved me so much time. Mentors guide us patiently and track our progress closely." },
  { name: "Arjun M.", grade: "Residential student, Grade 9", image: img.infra4, text: "The hostel feels like a second home. Study hours keep me focused, and weekends with friends are always full of fun activities." },
  { name: "Sneha P.", grade: "Grade 6 student", image: img.progElementary, text: "I love Annual Day and art club. Performing on stage helped me overcome my shyness, and now I enjoy speaking in assemblies too." },
];

const parents = [
  { name: "Dr. Maimoona Arshi", grade: "Parent of Abdul Majeeb", image: img.welcome, text: "HKSIS has excellent infrastructure in a serene environment, with highly qualified staff. Teachers always go that extra mile to bring out the best in every child. I would recommend this esteemed institution to anyone seeking all-round development." },
  { name: "Mr. Kariappa", grade: "Parent of Lakshitha", image: img.primary, text: "HKS has provided a strong academic foundation supported by well-trained teachers. Concepts are explained clearly with personal attention, and there's a good balance of academics, sports and cultural activities. I feel I made a good decision." },
];
const groups = [{ label: "Student", list: voices, Icon: GraduationCap }, { label: "Parent", list: parents, Icon: Heart }] as const;

export function StudentsSpeak() {
  const [tab, setTab] = useState(0);
  const group = groups[tab] ?? groups[0];
  const track = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const v = selected === null ? undefined : group.list[selected];
  const scroll = (d: number) => { const el = track.current; if (!el) return; const card = el.querySelector<HTMLElement>(".fam-card"); el.scrollBy({ left: d * ((card?.offsetWidth ?? 320) + 28), behavior: "smooth" }); };
  return <section className="fam-section stu-section" aria-labelledby="students-speak-heading">
    <img className="fam-bg" src={img.campus5} alt="" aria-hidden="true" loading="lazy" />
    <div className="container-site">
      <div className="fam-head tst-head"><div><span className="home-kicker">In their own words</span><h2 id="students-speak-heading"><em>Testimonials</em></h2><p>What learning, growing and belonging at HKS feels like.</p></div>
        <div className="tst-tabs" role="tablist" aria-label="Testimonials by">{groups.map(({ label, Icon }, i) => <button key={label} type="button" role="tab" id={`tst-tab-${i}`} aria-selected={tab === i} aria-controls="tst-panel" className={tab === i ? "is-active" : ""} onClick={() => { setTab(i); setSelected(null); track.current?.scrollTo({ left: 0 }); }}><Icon size={16} aria-hidden="true" />{label}</button>)}</div></div>
      <div className="stu-wrap">
        <button type="button" className="stu-nav stu-prev" onClick={() => scroll(-1)} aria-label="Previous testimonials"><ArrowLeft /></button>
        <div className="stu-track" ref={track} id="tst-panel" role="tabpanel" aria-labelledby={`tst-tab-${tab}`}>
          {group.list.map((item, i) => <article key={item.name} className="fam-card stu-card">
            <div className="fam-photo"><img src={item.image} alt={`${item.name} at HKS`} loading="lazy" /><span className="fam-quote"><Quote size={20} /></span></div>
            <div className="fam-body">
              <p className="fam-snippet">“{item.text.split(". ")[0]}.”</p>
              <h3>{item.name}</h3>
              <div className="fam-foot"><small><group.Icon size={14} /> {item.grade}</small><Button variant="ghost" className="fam-open" onClick={() => setSelected(i)} aria-label={`Read ${item.name}’s story`}><ArrowUpRight /></Button></div>
            </div>
          </article>)}
        </div>
        <button type="button" className="stu-nav stu-next" onClick={() => scroll(1)} aria-label="Next testimonials"><ArrowRight /></button>
      </div>
    </div>
    <Dialog open={Boolean(v)} onOpenChange={o => { if (!o) setSelected(null); }}>
      <DialogContent className="family-story-dialog">
        <Quote className="text-flame" size={36} aria-hidden="true" />
        <DialogTitle className="font-display text-2xl leading-snug">{v?.name}</DialogTitle>
        <DialogDescription>{v?.grade}</DialogDescription>
        <blockquote className="text-foreground text-base leading-relaxed">{v?.text}</blockquote>
      </DialogContent>
    </Dialog>
  </section>;
}

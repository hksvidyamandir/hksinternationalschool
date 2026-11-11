import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, GraduationCap, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { img } from "@/assets/site";

const voices = [
  { name: "Ananya R.", grade: "Grade 10 student", image: img.campus2, text: "My teachers explain every concept until it really clicks. The labs and projects make science my favourite subject, and I feel ready for my board exams." },
  { name: "Rohan K.", grade: "Grade 8 student", image: img.campus4, text: "Sports practice every evening has made me fitter and more confident. I captained our team this year and learnt how to lead others." },
  { name: "Diya S.", grade: "Grade 12 student", image: img.progSenior, text: "The NEET foundation classes alongside regular CBSE studies saved me so much time. Mentors guide us patiently and track our progress closely." },
  { name: "Arjun M.", grade: "Residential student, Grade 9", image: img.infra4, text: "The hostel feels like a second home. Study hours keep me focused, and weekends with friends are always full of fun activities." },
  { name: "Sneha P.", grade: "Grade 6 student", image: img.progElementary, text: "I love Annual Day and art club. Performing on stage helped me overcome my shyness, and now I enjoy speaking in assemblies too." },
];

export function StudentsSpeak() {
  const track = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const v = selected === null ? undefined : voices[selected];
  const scroll = (d: number) => { const el = track.current; if (!el) return; const card = el.querySelector<HTMLElement>(".fam-card"); el.scrollBy({ left: d * ((card?.offsetWidth ?? 320) + 28), behavior: "smooth" }); };
  return <section className="fam-section stu-section" aria-labelledby="students-speak-heading">
    <img className="fam-bg" src={img.campus5} alt="" aria-hidden="true" loading="lazy" />
    <div className="container-site">
      <div className="fam-head"><Quote className="fam-mark" aria-hidden="true" /><span className="home-kicker">In their own words</span><h2 id="students-speak-heading">Students <em>Speak</em></h2><p>What learning, growing and belonging at HKS feels like.</p></div>
      <div className="stu-wrap">
        <button type="button" className="stu-nav stu-prev" onClick={() => scroll(-1)} aria-label="Previous student stories"><ArrowLeft /></button>
        <div className="stu-track" ref={track}>
          {voices.map((item, i) => <article key={item.name} className="fam-card stu-card">
            <div className="fam-photo"><img src={item.image} alt={`${item.name} at HKS`} loading="lazy" /><span className="fam-quote"><Quote size={20} /></span></div>
            <div className="fam-body">
              <p className="fam-snippet">“{item.text.split(". ")[0]}.”</p>
              <h3>{item.name}</h3>
              <div className="fam-foot"><small><GraduationCap size={14} /> {item.grade}</small><Button variant="ghost" className="fam-open" onClick={() => setSelected(i)} aria-label={`Read ${item.name}’s story`}><ArrowUpRight /></Button></div>
            </div>
          </article>)}
        </div>
        <button type="button" className="stu-nav stu-next" onClick={() => scroll(1)} aria-label="Next student stories"><ArrowRight /></button>
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

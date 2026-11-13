import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { img } from "@/assets/site";
import film from "@/assets/hks-doodle-film.mp4.asset.json";
import heroFilm from "@/assets/hks-hero-clear.mp4.asset.json";

const videos = [
  { title: "A day at HKS", tag: "Campus life", poster: img.campus1, src: heroFilm.url },
  { title: "Learning by doing", tag: "Academics", poster: img.infra2, src: film.url },
  { title: "Play, sport and spirit", tag: "Sports", poster: img.campus3, src: heroFilm.url },
  { title: "Spaces that inspire", tag: "Infrastructure", poster: img.infra5, src: film.url },
  { title: "Friends for life", tag: "Student life", poster: img.campus4, src: heroFilm.url },
];

export function VideoStack() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const n = videos.length;
  const cur = open !== null ? videos[open] : undefined;
  const go = (d: number) => setActive(a => (a + d + n) % n);
  return <section className="vstack-section" aria-labelledby="vstack-title">
    <div className="container-site">
      <div className="vstack-head">
        <div><span className="home-kicker">Watch HKS</span><h2 id="vstack-title">Moments in motion</h2></div>
        <div className="vstack-nav">
          <button type="button" aria-label="Previous video" onClick={() => go(-1)}><ChevronLeft /></button>
          <span>{active + 1} / {n}</span>
          <button type="button" aria-label="Next video" onClick={() => go(1)}><ChevronRight /></button>
        </div>
      </div>
      <div className="vstack-stage">
        {videos.map((v, i) => {
          const pos = (i - active + n) % n;
          return <button key={v.title} type="button" className="vstack-card" data-pos={pos} tabIndex={pos === 0 ? 0 : -1} aria-hidden={pos !== 0}
            aria-label={`Play ${v.title}`} onClick={() => pos === 0 ? setOpen(i) : setActive(i)}>
            <img src={v.poster} alt="" loading="lazy" />
            <span className="vstack-shade photo-shade" />
            <span className="vstack-play"><Play fill="currentColor" /></span>
            <span className="vstack-cap"><em>{v.tag}</em><strong>{v.title}</strong></span>
          </button>;
        })}
      </div>
    </div>
    <Dialog open={open !== null} onOpenChange={o => { if (!o) setOpen(null); }}>
      <DialogContent className="experience-video-dialog translate-x-0 translate-y-0">
        <DialogTitle className="sr-only">{cur?.title ?? "HKS film"}</DialogTitle>
        <DialogDescription className="sr-only">School film.</DialogDescription>
        {cur && <video src={cur.src} autoPlay controls playsInline aria-label={cur.title} />}
      </DialogContent>
    </Dialog>
  </section>;
}

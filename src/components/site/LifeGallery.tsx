import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand } from "lucide-react";
import { img } from "@/assets/site";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const photos = [
  { label: "Early Years (Nursery – Grade 2)", src: img.progMontessori },
  { label: "Primary School (Grades 3 – 5)", src: img.progElementary },
  { label: "Middle & High (Grades 6 – 10)", src: img.progCbse },
  { label: "Senior Secondary (Grades 11 – 12)", src: img.progSenior },
  { label: "Residential Life", src: img.infra4 },
  { label: "Science & Technology", src: img.infra1 },
  { label: "The Arts", src: img.campus3 },
  { label: "Sports", src: img.campus4 },
];

export function LifeGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);
  const openedIndex = useRef(0);
  const photo = selected === null ? undefined : photos[selected];
  const move = (direction: number) => setSelected(index => index === null ? null : (index + direction + photos.length) % photos.length);
  return <section className="win-section">
    <div className="container-site">
      <div className="win-head"><span className="home-kicker">A window into our world</span><h2>Experience life, <em>the HKS way.</em></h2><p>Individual excellence, collective progress</p></div>
      <div className="win-grid">{photos.map((item, index) => <Button
        key={item.label} ref={element => { triggers.current[index] = element; }} type="button" variant="ghost"
        className="win-tile" data-motion-step={index % 4} aria-label={`View ${item.label} photo`} aria-haspopup="dialog"
        onClick={() => { openedIndex.current = index; setSelected(index); }}
      ><img src={item.src} alt={`${item.label} at HKS`} loading="lazy" /><span className="win-label"><i aria-hidden="true" />{item.label}<Expand aria-hidden="true" /></span></Button>)}</div>
      <div className="win-link"><Button asChild variant="secondary" className="home-action"><Link to="/campus">See more of our campus<ArrowUpRight /></Link></Button></div>
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="life-gallery-viewer" onCloseAutoFocus={event => { event.preventDefault(); triggers.current[openedIndex.current]?.focus(); }} onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); }
      }}>
        <DialogTitle className="sr-only">HKS photo gallery</DialogTitle>
        <DialogDescription className="sr-only">{photo?.label}</DialogDescription>
        {photo && <>
          <div className="life-gallery-image"><img key={photo.src} src={photo.src} alt={`${photo.label} at HKS`} /></div>
          <div className="life-gallery-footer">
            <Button type="button" variant="ghost" size="icon" aria-label="Previous gallery photo" onClick={() => move(-1)}><ArrowLeft /></Button>
            <div className="life-gallery-caption" aria-live="polite"><strong>{photo.label}</strong><span>{(selected ?? 0) + 1} / {photos.length}</span></div>
            <Button type="button" variant="ghost" size="icon" aria-label="Next gallery photo" onClick={() => move(1)}><ArrowRight /></Button>
          </div>
        </>}
      </DialogContent>
    </Dialog>
  </section>;
}
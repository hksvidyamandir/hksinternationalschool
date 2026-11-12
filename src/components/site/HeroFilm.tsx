import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarPlus, ChevronDown, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisitChooser } from "./VisitChooser";
import { img } from "@/assets/site";
import film from "@/assets/hks-doodle-film.mp4.asset.json";

const scenes = [
  { word: "Beyond the classroom.", label: "Creativity. Confidence. Expression." },
  { word: "Room to spread your wings.", label: "Rooted in Karnataka. Ready for the world." },
  { word: "Growing, together.", label: "One school. A world of possibility." },
];

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scene, setScene] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(media.matches);
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) { video.pause(); setPaused(true); }
      else { void video.play().then(() => setPaused(false)).catch(() => setPaused(true)); }
    };
    apply(); media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);
  const moveScene = (direction: number) => {
    const next = (scene + direction + scenes.length) % scenes.length;
    const video = videoRef.current;
    if (video) video.currentTime = next * 8;
    setScene(next);
  };
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().then(() => setPaused(false)).catch(() => setPaused(true));
    else { video.pause(); setPaused(true); }
  };
  const active = scenes[scene];
  if (!active) return null;
  return <section className={`home-hero home-hero-film ${reducedMotion ? "has-reduced-motion" : ""}`} aria-label="Welcome to HKS">
    <video ref={videoRef} className="home-hero-video" src={film.url} poster={img.infra5} autoPlay muted loop playsInline preload="auto" aria-label="HKS school life with animated white sketches" onTimeUpdate={e => setScene(Math.min(2, Math.floor(e.currentTarget.currentTime / 8)))} />
    <div className="home-hero-shade" />
    <div className="container-site home-hero-content">
      <h1 className="sr-only">HKS Vidyamandir</h1>
      <div className="home-hero-top"><span>Since 2010</span></div>
      <div className="home-film-caption" key={scene}><p className="home-kicker">{active.label}</p><p className="home-hero-script">{active.word}</p></div>
      <div className="home-hero-bottom">
        <VisitChooser>
          <Button type="button" variant="outline" className="home-visit"><CalendarPlus size={16} /> Schedule a campus visit <ChevronDown size={14} className="home-visit-caret" /></Button>
        </VisitChooser>
        <Button asChild className="home-action"><Link to="/admissions">Admissions 2026-27<ArrowUpRight /></Link></Button>
        <div className="home-slide-controls"><span>0{scene + 1} / 03</span><Button variant="ghost" size="icon" aria-label="Previous banner" onClick={() => moveScene(-1)}><ArrowLeft /></Button><Button variant="ghost" size="icon" aria-label={paused ? "Play banners" : "Pause banners"} onClick={toggle}>{paused ? <Play /> : <Pause />}</Button><Button variant="ghost" size="icon" aria-label="Next banner" onClick={() => moveScene(1)}><ArrowRight /></Button></div>
      </div>
    </div>
  </section>;
}

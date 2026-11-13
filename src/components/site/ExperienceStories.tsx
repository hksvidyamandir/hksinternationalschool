import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Quote } from "lucide-react";
import { useState } from "react";
import { img } from "@/assets/site";
import film from "@/assets/hks-doodle-film.mp4.asset.json";
import heroFilm from "@/assets/hks-hero-clear.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type Story = { name: string; category: string; text: string; image: string; to?: "/about" | "/experiential-learning" | "/why-hks" | "/boarding" | "/campus-life" | "/campus"; video?: { src: string; label: string; trigger: string } };

const experiences: Story[] = [
  { name: "Dr. Maimoona Arshi", category: "Parent", text: "Teachers always go that extra mile to bring out the best in every child.", image: img.welcome, to: "/about" },
  { name: "Curiosity in action", category: "Learning", text: "Experiments, projects and hands-on discovery connect classroom concepts with the world beyond.", image: img.acad3, to: "/experiential-learning" },
  { name: "Life at HKS", category: "School film", text: "A glimpse of learning, discovery and everyday life at HKS Vidyamandir.", image: img.infra5, video: { src: film.url, label: "HKS school film", trigger: "Play HKS school film" } },
  { name: "A place to belong", category: "Residential life", text: "A school community that brings learning, friendship and residential care together.", image: img.infra4, to: "/boarding" },
  { name: "Space to shine", category: "Arts & culture", text: "Music, dance, art and stage moments that help every student grow in confidence.", image: img.acad4, to: "/campus-life" },
  { name: "Campus in motion", category: "Campus film", text: "Classrooms, playgrounds and friendships - a moving look at a day on campus.", image: img.campus1, video: { src: heroFilm.url, label: "HKS campus film", trigger: "Play HKS campus film" } },
  { name: "Team spirit", category: "Sports", text: "Games, athletics and yoga keep students active, confident and working together.", image: img.campus4, to: "/campus-life" },
  { name: "Spaces to learn", category: "Campus", text: "Bright classrooms, labs and libraries designed for focused, joyful learning.", image: img.infra2, to: "/campus" },
];

export function ExperienceStories() {
  const [video, setVideo] = useState<Story["video"] | null>(null);
  const [videoError, setVideoError] = useState(false);
  const card = (item: Story, i: number) => {
    const tone = `tone-${i % 4}`;
    const body = <>
      <div className="experience-quote">{item.video ? <Play size={36} aria-hidden="true" /> : <Quote size={36} aria-hidden="true" />}<h3>{item.name}</h3><p>{item.text}</p><ArrowUpRight className="experience-arrow" size={18} aria-hidden="true" /></div>
      <div className="experience-photo"><img src={item.image} alt={`${item.category} at HKS Vidyamandir`} loading="lazy" /><span>{item.category}</span>{item.video && <i className="experience-play" aria-hidden="true"><Play /></i>}</div>
    </>;
    if (item.video) return <Button key={item.name} variant="ghost" className={`experience-card experience-video-card ${tone}`} aria-label={item.video.trigger} onClick={() => { setVideoError(false); setVideo(item.video); }}>{body}</Button>;
    return <Link key={item.name} to={item.to ?? "/about"} className={`experience-card ${tone}`} aria-label={`Explore ${item.name}`}>{body}</Link>;
  };
  return <section className="home-section home-experiences" aria-labelledby="experience-heading">
    <div className="container-site">
      <div className="experience-heading"><span className="home-kicker">The HKS community</span><h2 id="experience-heading">Our stories and<br /><em>experiences.</em></h2></div>
      <Carousel className="experience-carousel" opts={{ align: "start", loop: true }}>
        <CarouselContent>{experiences.map((item, i) => <CarouselItem key={item.name} className="experience-slide">{card(item, i)}</CarouselItem>)}</CarouselContent>
        <CarouselPrevious className="experience-arrow-btn" aria-label="Previous story" />
        <CarouselNext className="experience-arrow-btn" aria-label="Next story" />
      </Carousel>
    </div>
    <Dialog open={Boolean(video)} onOpenChange={o => { if (!o) setVideo(null); }}>
      <DialogContent className="experience-video-dialog translate-x-0 translate-y-0">
        <DialogTitle className="sr-only">{video?.label ?? "HKS film"}</DialogTitle>
        <DialogDescription className="sr-only">Photo-and-doodle school film.</DialogDescription>
        {video && (videoError ? <p role="alert">The film could not load. Please close and try again.</p> : <video controlsList="nodownload noplaybackrate" disablePictureInPicture src={video.src} autoPlay controls playsInline preload="auto" aria-label={video.label} onError={() => setVideoError(true)} />)}
      </DialogContent>
    </Dialog>
  </section>;
}

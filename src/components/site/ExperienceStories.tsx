import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Quote } from "lucide-react";
import { useState } from "react";
import { img } from "@/assets/site";
import film from "@/assets/hks-doodle-film.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const experiences = [
  { name: "Dr. Maimoona Arshi", category: "Parent", text: "Teachers always go that extra mile to bring out the best in every child.", image: img.welcome, to: "/about" as const },
  { name: "Curiosity in action", category: "Learning", text: "Experiments, projects and hands-on discovery connect classroom concepts with the world beyond.", image: img.acad3, to: "/experiential-learning" as const },
  { name: "Life at HKS", category: "School film", text: "A glimpse of learning, discovery and everyday life at HKS Vidyamandir.", image: img.infra5, to: "/why-hks" as const },
  { name: "A place to belong", category: "Residential life", text: "A school community that brings learning, friendship and residential care together.", image: img.infra4, to: "/boarding" as const },
];

export function ExperienceStories() {
  const [videoError, setVideoError] = useState(false);
  return <section className="home-section home-experiences" aria-labelledby="experience-heading">
    <div className="container-site">
      <div className="experience-heading"><span className="home-kicker">The HKS community</span><h2 id="experience-heading">Our stories and<br /><em>experiences.</em></h2></div>
      <div className="experience-grid">{experiences.map((item, index) => index === 2 ? <Dialog key={item.name} onOpenChange={() => setVideoError(false)}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="experience-card experience-video-card" aria-label="Play HKS school film">
            <div className="experience-quote"><Play size={36} aria-hidden="true" /><h3>{item.name}</h3><p>{item.text}</p><ArrowUpRight className="experience-arrow" size={18} aria-hidden="true" /></div>
            <div className="experience-photo"><img src={item.image} alt="School life at HKS Vidyamandir" loading="lazy" /><span>{item.category}</span><i className="experience-play" aria-hidden="true"><Play /></i></div>
          </Button>
        </DialogTrigger>
        <DialogContent className="experience-video-dialog translate-x-0 translate-y-0">
          <DialogTitle className="sr-only">HKS Vidyamandir school film</DialogTitle>
          <DialogDescription className="sr-only">Photo-and-doodle school film.</DialogDescription>
          {videoError ? <p role="alert">The film could not load. Please close and try again.</p> : <video src={film.url} poster={item.image} autoPlay controls playsInline preload="auto" aria-label="HKS school film" onError={() => setVideoError(true)} />}
        </DialogContent>
      </Dialog> : <Link key={item.name} to={item.to} className="experience-card" aria-label={`Explore ${item.name}`}>
        <div className="experience-quote"><Quote size={36} aria-hidden="true" /><h3>{item.name}</h3><p>{item.text}</p><ArrowUpRight className="experience-arrow" size={18} /></div>
        <div className="experience-photo"><img src={item.image} alt={`${item.category} moments at HKS Vidyamandir`} loading="lazy" /><span>{item.category}</span></div>
      </Link>)}</div>
    </div>
  </section>;
}
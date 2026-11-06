import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";

const experiences = [
  { name: "Dr. Maimoona Arshi", category: "Parent", text: "Teachers always go that extra mile to bring out the best in every child.", image: img.welcome, to: "/about" as const },
  { name: "Curiosity in action", category: "Learning", text: "Experiments, projects and hands-on discovery connect classroom concepts with the world beyond.", image: img.acad3, to: "/experiential-learning" as const },
  { name: "Mr. Kariappa", category: "Parent", text: "Concepts are explained clearly with personal attention, and there's a good balance of academics, sports and cultural activities.", image: img.primary, to: "/why-hks" as const },
  { name: "A place to belong", category: "Residential life", text: "A school community that brings learning, friendship and residential care together.", image: img.infra4, to: "/boarding" as const },
];

export function ExperienceStories() {
  return <section className="home-section home-experiences" aria-labelledby="experience-heading">
    <div className="container-site">
      <div className="experience-heading"><span className="home-kicker">The HKS community</span><h2 id="experience-heading">Our stories and<br /><em>experiences.</em></h2><Button asChild variant="ghost" className="experience-seal"><Link to="/campus-life" aria-label="Explore life at HKS"><span>Life at HKS</span><BookOpen size={24} /><ArrowUpRight size={15} /></Link></Button></div>
      <div className="experience-grid">{experiences.map(item => <Link key={item.name} to={item.to} className="experience-card" aria-label={`Explore ${item.name}`}>
        <div className="experience-quote"><Quote size={36} aria-hidden="true" /><h3>{item.name}</h3><p>{item.text}</p><ArrowUpRight className="experience-arrow" size={18} /></div>
        <div className="experience-photo"><img src={item.image} alt={`${item.category} moments at HKS International School`} loading="lazy" /><span>{item.category}</span></div>
      </Link>)}</div>
    </div>
  </section>;
}
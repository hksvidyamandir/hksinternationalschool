import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { img } from "@/assets/site";
import gardening from "@/assets/krishi-gardening.jpg";
import farming from "@/assets/krishi-farming.jpg";
import exams from "@/assets/learning-exam-preparation.jpg";
import olympiad from "@/assets/learning-olympiad.jpg";
import industry from "@/assets/learning-industry.jpg";
import laboratory from "@/assets/learning-laboratory.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KrishiIcon, KhelIcon, AnubhavIcon, SamskrutiIcon } from "./VidyaIcons";

const groups = [
  { id: "krishi", name: "Krishi Vidya", Icon: KrishiIcon, subtitle: "Nature becomes the classroom.", topics: [
    { title: "Experiential Learning", text: "Planting, gardening and hands-on experiences bring learning to life.", image: gardening, alt: "Illustrative photograph of planting a seedling", to: "/experiential-learning" as const },
    { title: "Organic Farming & Gardening", text: "Sowing, caring for plants and harvesting connect learning with nature.", image: farming, alt: "Illustrative photograph of students harvesting vegetables with a teacher in a garden", to: "/experiential-learning" as const },
  ] },
  { id: "khel", name: "Khel Vidya", Icon: KhelIcon, subtitle: "Movement, wellbeing and team spirit.", topics: [
    { title: "Physical Education", text: "Sport, yoga and fitness develop confidence, discipline and teamwork.", image: img.acad3, alt: "HKS students exercising outdoors", to: "/sports" as const },
    { title: "Welfare and Facilities", text: "Spaces and everyday support for student wellbeing and active school life.", image: img.infra2, alt: "HKS campus buildings and gardens", to: "/campus" as const },
  ] },
  { id: "anubhav", name: "Anubhav Vidya", Icon: AnubhavIcon, subtitle: "Curiosity meets real-world discovery.", topics: [
    { title: "Laboratories", text: "Experiments and practical exploration connect ideas with discovery.", image: laboratory, alt: "Illustrative photograph of a supervised school science experiment", to: "/campus" as const },
    { title: "Competitive Exams", text: "Focused preparation strengthens understanding and academic confidence.", image: exams, alt: "Illustrative photograph of students preparing for exams", to: "/competitive-exams" as const },
    { title: "Olympiad Preparation", text: "Problem-solving activities develop reasoning and a spirit of enquiry.", image: olympiad, alt: "Illustrative photograph of students solving a science and mathematics puzzle", to: "/competitive-exams" as const },
    { title: "Industry Orientation", text: "Real-world projects connect classroom learning with practical applications.", image: industry, alt: "Illustrative photograph of an educational engineering workshop visit", to: "/experiential-learning" as const },
  ] },
  { id: "samskriti", name: "Samskriti Vidya", Icon: SamskrutiIcon, subtitle: "Expression, culture and connections.", topics: [
    { title: "Student Clubs", text: "Shared interests, house activities and teamwork create opportunities to participate.", image: img.welcome, alt: "HKS school community", to: "/campus-life" as const },
    { title: "Events & Celebrations", text: "Festivals, performances and annual events celebrate every student's expression.", image: img.campus5, alt: "Annual Day performance at HKS", to: "/campus-life" as const },
  ] },
];

export function BeyondClassroom() {
  return <section className="home-section beyond-vidya" aria-labelledby="beyond-heading"><div className="container-site">
    <div className="home-heading"><span className="home-kicker">Beyond the classroom</span><h2 id="beyond-heading">Discover what makes <em>you, you.</em></h2><p>Room for a new passion. Space for an unexpected talent.</p></div>
    <Tabs defaultValue="krishi">
      <TabsList className="beyond-tabs" aria-label="Explore the four Vidyas">{groups.map(({ id, name, Icon }) => <TabsTrigger key={id} value={id} className="beyond-tab"><Icon /><span>{name}</span></TabsTrigger>)}</TabsList>
      {groups.map(({ id, name, subtitle, topics }) => <TabsContent key={id} value={id} className="beyond-panel">
        <div className="beyond-panel-heading"><h3>{subtitle}</h3><span>{name} / {String(topics.length).padStart(2, "0")} {topics.length === 1 ? "experience" : "experiences"}</span></div>
        <div className={`beyond-topics beyond-topics-${topics.length}`}>{topics.map((topic, index) => <Link key={topic.title} to={topic.to} className="beyond-topic">
          <div className="beyond-topic-photo"><img src={topic.image} alt={topic.alt} loading="lazy" width={1024} height={1024} /><span aria-hidden="true">0{index + 1}</span></div>
          <div className="beyond-topic-copy"><h4>{topic.title}</h4><ArrowUpRight aria-hidden="true" /><p>{topic.text}</p></div>
        </Link>)}</div>
      </TabsContent>)}
    </Tabs>
  </div></section>;
}
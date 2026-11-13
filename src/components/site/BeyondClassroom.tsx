import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import krishi1 from "@/assets/vidya-krishi-1.jpg";
import krishi2 from "@/assets/vidya-krishi-2.jpg";
import krishi3 from "@/assets/vidya-krishi-3.jpg";
import krishi4 from "@/assets/vidya-krishi-4.jpg";
import khel1 from "@/assets/vidya-khel-1.jpg";
import khel2 from "@/assets/vidya-khel-2.jpg";
import khel3 from "@/assets/vidya-khel-3.jpg";
import khel4 from "@/assets/vidya-khel-4.jpg";
import anubhav1 from "@/assets/vidya-anubhav-1.jpg";
import anubhav2 from "@/assets/vidya-anubhav-2.jpg";
import anubhav3 from "@/assets/vidya-anubhav-3.jpg";
import anubhav4 from "@/assets/vidya-anubhav-4.jpg";
import samskruti1 from "@/assets/vidya-samskruti-1.jpg";
import samskruti2 from "@/assets/vidya-samskruti-2.jpg";
import samskruti3 from "@/assets/vidya-samskruti-3.jpg";
import samskruti4 from "@/assets/vidya-samskruti-4.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KrishiIcon, KhelIcon, AnubhavIcon, SamskritiIcon } from "./VidyaIcons";

const groups = [
  { id: "krishi", name: "Krishi Vidya", Icon: KrishiIcon, subtitle: "Nature becomes the classroom.", topics: [
    { title: "Experiential Learning", text: "Planting, gardening and hands-on experiences bring learning to life.", image: krishi1, alt: "Illustrative photograph of planting a seedling", to: "/experiential-learning" as const },
    { title: "Organic Farming & Gardening", text: "Sowing, caring for plants and harvesting connect learning with nature.", image: krishi2, alt: "Illustrative photograph of students harvesting vegetables with a teacher in a garden", to: "/experiential-learning" as const },
    { title: "Horticulture & Sustainability", text: "Horticulture activities and environmental awareness help students learn to care for nature.", image: krishi3, alt: "Illustrative photograph of students and a teacher caring for young garden plants", to: "/experiential-learning" as const },
    { title: "Composting & Environmental Care", text: "Hands-on environmental activities turn everyday choices into care for our planet.", image: krishi4, alt: "Illustrative photograph of students composting garden leaves", to: "/experiential-learning" as const },
  ] },
  { id: "khel", name: "Khel Vidya", Icon: KhelIcon, subtitle: "Movement, wellbeing and team spirit.", topics: [
    { title: "Physical Education", text: "Sport, yoga and fitness develop confidence, discipline and teamwork.", image: khel1, alt: "Illustrative photograph of students playing basketball", to: "/sports" as const },
    { title: "Indoor Sports", text: "Indoor games strengthen coordination, concentration and sporting confidence.", image: khel2, alt: "Illustrative photograph of students playing table tennis", to: "/campus" as const },
    { title: "Yoga, Dance & Fitness", text: "Movement and mindful practice encourage confidence, coordination and joy.", image: khel3, alt: "Illustrative photograph of students practicing yoga with a teacher outdoors", to: "/sports" as const },
    { title: "Athletics & Teamwork", text: "Relay activities and sporting challenges build resilience and team spirit.", image: khel4, alt: "Illustrative photograph of students passing a relay baton", to: "/sports" as const },
  ] },
  { id: "anubhav", name: "Anubhav Vidya", Icon: AnubhavIcon, subtitle: "Curiosity meets real-world discovery.", topics: [
    { title: "Laboratories", text: "Experiments and practical exploration connect ideas with discovery.", image: anubhav1, alt: "Illustrative photograph of a supervised school science experiment", to: "/campus" as const },
    { title: "Competitive Exams & Olympiads", text: "Focused preparation and problem-solving strengthen understanding, reasoning and academic confidence.", image: anubhav2, alt: "Illustrative photograph of students preparing for competitive exams", to: "/competitive-exams" as const },
    { title: "Industry Orientation", text: "Real-world projects connect classroom learning with practical applications.", image: anubhav3, alt: "Illustrative photograph of an educational engineering workshop visit", to: "/experiential-learning" as const },
    { title: "Robotics & Maker Projects", text: "Designing, coding and building help young thinkers turn ideas into practical solutions.", image: anubhav4, alt: "Illustrative photograph of students building an educational robot", to: "/experiential-learning" as const },
  ] },
  { id: "samskruti", name: "Samskriti Vidya", Icon: SamskritiIcon, subtitle: "Expression, culture and connections.", topics: [
    { title: "Student Clubs", text: "Shared interests, house activities and teamwork create opportunities to participate.", image: samskruti1, alt: "Illustrative photograph of a student public speaking club", to: "/campus-life" as const },
    { title: "Events & Celebrations", text: "Festivals, performances and annual events celebrate every student's expression.", image: samskruti2, alt: "Illustrative photograph of students celebrating with flower rangoli", to: "/campus-life" as const },
    { title: "Student Performances", text: "Music, dance and creative expression give students opportunities to perform and connect.", image: samskruti3, alt: "Illustrative photograph of students enjoying music and dance with a teacher", to: "/campus-life" as const },
    { title: "Leadership & Community", text: "Shared projects encourage student initiative, participation and thoughtful leadership.", image: samskruti4, alt: "Illustrative photograph of students planning a community project", to: "/campus-life" as const },
  ] },
];

export function BeyondClassroom() {
  return <section className="home-section beyond-vidya" aria-labelledby="beyond-heading"><div className="container-site">
    <div className="home-heading"><span className="home-kicker">Beyond the classroom</span><h2 id="beyond-heading">Discover what makes <em>you, you.</em></h2><p>Room for a new passion. Space for an unexpected talent.</p></div>
    <Tabs defaultValue="krishi">
      <TabsList className="beyond-tabs" aria-label="Explore the four Vidyas">{groups.map(({ id, name, Icon }) => <TabsTrigger key={id} value={id} className="beyond-tab"><Icon /><span>{name}</span></TabsTrigger>)}</TabsList>
      {groups.map(({ id, name, subtitle, topics }) => <TabsContent key={id} value={id} className="beyond-panel">
        <div className="beyond-panel-heading"><h3>{subtitle}</h3><span>{name} / {String(topics.length).padStart(2, "0")} {topics.length === 1 ? "experience" : "experiences"}</span></div>
        <div className="beyond-topics">{topics.map((topic, index) => <article key={topic.title} className="beyond-topic">
          <div className="beyond-topic-photo"><img src={topic.image} alt={topic.alt} loading="lazy" width={756} height={756} /><span>{String(index + 1).padStart(2, "0")} / {name}</span></div>
          <div className="beyond-topic-copy"><span className="beyond-topic-label">{name}</span><h4>{topic.title}</h4><p>{topic.text}</p><Button asChild variant="ghost" className="beyond-topic-action"><Link to={topic.to} aria-label={`Explore ${topic.title}`}>Explore more<ArrowRight aria-hidden="true" /></Link></Button></div>
        </article>)}</div>
      </TabsContent>)}
    </Tabs>
  </div></section>;
}
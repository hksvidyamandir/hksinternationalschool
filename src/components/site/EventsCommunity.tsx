import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Trophy, Users, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";

const events = [
  { label: "Union Day", title: "Union Day", sub: "One school. A shared celebration.", text: "A time to come together, celebrate student talent and strengthen the bonds of our school community. Shared moments on campus bring students, educators and families closer.", image: img.campus2, alt: "School gathering on the HKS stage", Icon: Users },
  { label: "Cultural", title: "Cultural celebrations", sub: "Every talent deserves a stage.", text: "Music, dance, performances and cultural celebrations give students space to express themselves. Creativity, teamwork and the joy of performing help build confidence beyond the classroom.", image: img.acad4, alt: "HKS students in colourful performance costumes", Icon: Music },
  { label: "Sports", title: "Sports at HKS", sub: "Team spirit. Stronger together.", text: "From games and athletics to yoga and fitness, sporting activities encourage students to stay active, work as a team and grow in confidence. Every effort is an opportunity to learn and improve.", image: img.acad3, alt: "HKS students taking part in outdoor fitness activities", Icon: Trophy },
];
const communityStory = { title: "One school", sub: "Many stories, one sense of belonging", text: "Parents, educators and students come together to support every child's growth, confidence and wellbeing - from orientation days to festivals and sports meets.", image: img.welcome, alt: "HKS school community", Icon: Users };

export function EventsCommunity() {
  const [community, setCommunity] = useState(0);
  const [event, setEvent] = useState(0);
  const story = community === 0 ? events[event] : communityStory;
  if (!story) return null;
  return <section className="evc-section"><div className="container-site">
    <div className="evc-head"><span className="home-kicker">Events &amp; community</span><h2>School is better, <em>together.</em></h2></div>
    <div className={`evc-folders is-${community}`}>
      <div className="evc-tabs" role="tablist" aria-label="Community stories">
        {[{ label: "Events", Icon: Sparkles }, { label: "Community", Icon: Users }].map(({ label, Icon }, i) => <Button variant="ghost" key={label} role="tab" id={`evc-tab-${i}`} aria-selected={community === i} aria-controls="evc-panel" className={`evc-tab ${community === i ? "is-active" : ""}`} tabIndex={community === i ? 0 : -1} onClick={() => setCommunity(i)} onKeyDown={e => { const next = e.key === "ArrowRight" || e.key === "ArrowLeft" ? 1 - i : e.key === "Home" ? 0 : e.key === "End" ? 1 : undefined; if (next === undefined) return; e.preventDefault(); setCommunity(next); document.getElementById(`evc-tab-${next}`)?.focus(); }}><Icon aria-hidden="true" />{label}</Button>)}
      </div>
      <div className="evc-panel" id="evc-panel" role="tabpanel" aria-labelledby={`evc-tab-${community}`}>
        {community === 0 && <div className="evc-event-tabs" role="tablist" aria-label="School events">
          {events.map(({ label, Icon }, i) => <Button key={label} variant="ghost" role="tab" id={`evc-event-${i}`} aria-selected={event === i} aria-controls="evc-event-story" tabIndex={event === i ? 0 : -1} className="evc-event-tab" onClick={() => setEvent(i)} onKeyDown={e => { const next = e.key === "ArrowRight" ? (i + 1) % events.length : e.key === "ArrowLeft" ? (i + events.length - 1) % events.length : e.key === "Home" ? 0 : e.key === "End" ? events.length - 1 : undefined; if (next === undefined) return; e.preventDefault(); setEvent(next); document.getElementById(`evc-event-${next}`)?.focus(); }}><Icon aria-hidden="true" />{label}</Button>)}
        </div>}
        <div className="evc-story" id={community === 0 ? "evc-event-story" : undefined} role={community === 0 ? "tabpanel" : undefined} aria-labelledby={community === 0 ? `evc-event-${event}` : undefined}>
          <div className="evc-copy"><span className="evc-date">{community === 0 ? "Celebrating school life" : "Every day at HKS"}</span><h3>{story.title}<span>{story.sub}</span></h3><p>{story.text}</p><Button asChild className="home-action"><Link to="/campus-life">Life at HKS<ArrowUpRight /></Link></Button></div>
          <div className="evc-media"><img src={story.image} alt={story.alt} loading="lazy" /><div className="evc-badge" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="evc-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href="#evc-circle" textLength="286" lengthAdjust="spacing">{community === 0 ? "EVENTS · EVENTS · EVENTS · " : "COMMUNITY · COMMUNITY · "}</textPath></text></svg><span><story.Icon /></span></div></div>
        </div>
      </div>
    </div>
  </div></section>;
}
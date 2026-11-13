import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Trophy, Users, Music, Flag, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";

const events = [
  { label: "Union Day", title: "Union Day", sub: "One school. A shared celebration.", text: "A time to come together, celebrate student talent and strengthen the bonds of our school community. Shared moments on campus bring students, educators and families closer.", image: img.campus2, alt: "School gathering on the HKS stage", Icon: Users },
  { label: "Cultural", title: "Cultural celebrations", sub: "Every talent deserves a stage.", text: "Music, dance, performances and cultural celebrations give students space to express themselves. Creativity, teamwork and the joy of performing help build confidence beyond the classroom.", image: img.acad4, alt: "HKS students in colourful performance costumes", Icon: Music },
  { label: "Sports", title: "Sports at HKS", sub: "Team spirit. Stronger together.", text: "From games and athletics to yoga and fitness, sporting activities encourage students to stay active, work as a team and grow in confidence. Every effort is an opportunity to learn and improve.", image: img.acad3, alt: "HKS students taking part in outdoor fitness activities", Icon: Trophy },
];
const celebrations = [
  { label: "Gandhi Jayanti", title: "Gandhi Jayanti", sub: "Small acts. Meaningful change.", text: "Remembering Mahatma Gandhi's values of truth, peace and non-violence encourages children to practise kindness and respect. Reflection, thoughtful conversations and a spirit of service connect these values to everyday life.", image: img.campus4, alt: "HKS students gathered for a school assembly", Icon: Heart },
  { label: "Independence Day", title: "Independence Day", sub: "Celebrating freedom. Growing together.", text: "India's journey to independence inspires gratitude, unity and a sense of responsibility. Patriotic songs, stories of our freedom movement and shared celebrations help children understand the meaning of freedom and belonging.", image: img.welcome, alt: "HKS students marching together on campus", Icon: Flag },
  { label: "Republic Day", title: "Republic Day", sub: "Our Constitution. Our shared future.", text: "Republic Day is an opportunity to explore the values of our Constitution - justice, liberty, equality and fraternity. Learning about rights, responsibilities and respect for diversity encourages students to become thoughtful citizens.", image: img.campus3, alt: "HKS students standing in ceremonial formation", Icon: BookOpen },
];

export function EventsCommunity() {
  const [community, setCommunity] = useState(0);
  const [event, setEvent] = useState(0);
  const [celebration, setCelebration] = useState(0);
  const choices = community === 0 ? events : celebrations;
  const selected = community === 0 ? event : celebration;
  const setSelected = community === 0 ? setEvent : setCelebration;
  const story = choices[selected];
  if (!story) return null;
  return <section className="evc-section"><div className="container-site">
    <div className="evc-head"><span className="home-kicker">Events &amp; celebration</span><h2>School is better, <em>together.</em></h2></div>
    <div className={`evc-folders is-${community}`}>
      <div className="evc-tabs" role="tablist" aria-label="Events and celebration">
        {[{ label: "Events", Icon: Sparkles }, { label: "Celebration", Icon: Flag }].map(({ label, Icon }, i) => <Button variant="ghost" key={label} role="tab" id={`evc-tab-${i}`} aria-selected={community === i} aria-controls="evc-panel" className={`evc-tab ${community === i ? "is-active" : ""}`} tabIndex={community === i ? 0 : -1} onClick={() => setCommunity(i)} onKeyDown={e => { const next = e.key === "ArrowRight" || e.key === "ArrowLeft" ? 1 - i : e.key === "Home" ? 0 : e.key === "End" ? 1 : undefined; if (next === undefined) return; e.preventDefault(); setCommunity(next); document.getElementById(`evc-tab-${next}`)?.focus(); }}><Icon aria-hidden="true" />{label}</Button>)}
      </div>
      <div className="evc-panel" id="evc-panel" role="tabpanel" aria-labelledby={`evc-tab-${community}`}>
        <div className="evc-event-tabs" role="tablist" aria-label={community === 0 ? "School events" : "School celebrations"}>
          {choices.map(({ label, Icon }, i) => <Button key={label} variant="ghost" role="tab" id={`evc-choice-${community}-${i}`} aria-selected={selected === i} aria-controls="evc-event-story" tabIndex={selected === i ? 0 : -1} className="evc-event-tab" onClick={() => setSelected(i)} onKeyDown={e => { const next = e.key === "ArrowRight" ? (i + 1) % choices.length : e.key === "ArrowLeft" ? (i + choices.length - 1) % choices.length : e.key === "Home" ? 0 : e.key === "End" ? choices.length - 1 : undefined; if (next === undefined) return; e.preventDefault(); setSelected(next); document.getElementById(`evc-choice-${community}-${next}`)?.focus(); }}><Icon aria-hidden="true" /><span>{label}</span></Button>)}
        </div>
        <div className="evc-story" id="evc-event-story" role="tabpanel" aria-labelledby={`evc-choice-${community}-${selected}`}>
          <div className="evc-copy"><span className="evc-date">{community === 0 ? "Celebrating school life" : "Shared values. Special moments."}</span><h3>{story.title}<span>{story.sub}</span></h3><p>{story.text}</p><Button asChild className="home-action"><Link to="/campus-life">Life at HKS<ArrowUpRight /></Link></Button></div>
          <div className="evc-media"><img src={story.image} alt={story.alt} loading="lazy" /><div className="evc-badge" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="evc-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href="#evc-circle" textLength="286" lengthAdjust="spacing">{community === 0 ? "EVENTS · EVENTS · EVENTS · " : "CELEBRATION · CELEBRATION · "}</textPath></text></svg><span><story.Icon /></span></div></div>
        </div>
      </div>
    </div>
  </div></section>;
}
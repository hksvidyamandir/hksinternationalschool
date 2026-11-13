import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, Heart, Sparkles, Trophy, FlaskConical, Globe2, Users, ShieldCheck, Pause, Play, MapPin, Quote, Bus, Cctv, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";
import { SITE } from "@/lib/site";
import { HeroFilm } from "./HeroFilm";
import { FamilyStories } from "./FamilyStories";
import { StudentsSpeak } from "./StudentsSpeak";
import { useHomeMotion } from "@/hooks/use-home-motion";
import { ExperienceStories } from "./ExperienceStories";
import { AdvantageStats } from "./AdvantageStats";
import { AdvantageIcon, type AdvantageIconKind } from "./AdvantageIcon";
import { ProgrammeSelector } from "./ProgrammeSelector";
import { VisitChooser } from "./VisitChooser";
import { LifeGallery } from "./LifeGallery";
import { PillarsShowcase } from "./PillarsShowcase";
import { BeyondClassroom } from "./BeyondClassroom";
import { RecognitionStrip } from "./RecognitionStrip";
const advantages: { icon: AdvantageIconKind; title: string; text: string }[] = [
  { icon: "individual", title: "Personalized Attention", text: "Small Class Sizes" },
  { icon: "practical", title: "Practical Skills", text: "Real-World Application" },
  { icon: "discovery", title: "Innovative Learning", text: "Modern Teaching Methods" },
  { icon: "world", title: "Global Exposure", text: "International Programs" },
  { icon: "care", title: "Holistic Development", text: "Beyond Academics" },
  { icon: "handsOn", title: "Hands-On Learning", text: "Practical Experience" },
  { icon: "support", title: "Individual Support", text: "Tailored Guidance" },
  { icon: "facilities", title: "Modern Facilities", text: "State-of-the-Art Infrastructure" },
];
const eventStories = [
  { label: "Family Day", title: "Family Day:", sub: "Making memories, together", text: "A day for families to connect, share laughter and celebrate the joy of growing together. Shared activities and time with the school community bring children, parents and educators closer.", image: img.campus4, alt: "Families and students gathered at an HKS school event", Icon: Users },
  { label: "Cultural", title: "Cultural celebrations:", sub: "Every talent has a place", text: "Music, dance, visual arts and performances bring creativity to life. Cultural celebrations give students space to express themselves, honour traditions and celebrate one another’s talents.", image: img.campus5, alt: "Students performing together at an HKS celebration", Icon: Sparkles },
  { label: "Sports", title: "Sports:", sub: "Team spirit. Shared pride.", text: "From games and athletics to team activities, sport brings energy and friendship to school life. Students build fitness, confidence and resilience while learning the value of teamwork and fair play.", image: img.welcome, alt: "HKS students marching together on the school sports ground", Icon: Trophy },
];
const galleries = [
  { title: "Campus life", images: [img.campus1, img.campus2, img.campus3, img.campus4, img.campus5, img.welcome] },
  { title: "Learning spaces", images: [img.infra1, img.infra2, img.infra3, img.infra4, img.infra5, img.infra6] },
  { title: "Our achievers", images: [img.topper1, img.topper2, img.topper3, img.topper4, img.topper5] },
];

function Heading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="home-heading"><span className="home-kicker">{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
function Action({ to, children, light = false }: { to: "/about" | "/academics" | "/admissions" | "/contact" | "/campus" | "/campus-life"; children: React.ReactNode; light?: boolean }) {
  return <Button asChild variant={light ? "secondary" : "default"} className="home-action"><Link to={to}>{children}<ArrowUpRight /></Link></Button>;
}

export function HomePage() {
  const motionRef = useHomeMotion();
  const [gallery, setGallery] = useState(0);
  const [community, setCommunity] = useState(0);
  const [eventCategory, setEventCategory] = useState(0);
  const activeGallery = galleries[gallery];
  if (!activeGallery) return null;
  return <div className="hks-home" ref={motionRef}>
    <HeroFilm />
    <RecognitionStrip />

    <div className="home-trust"><div className="home-marquee">{[0, 1].map(i => <div key={i} aria-hidden={i === 1}>{["CBSE curriculum", "Nursery to Grade 12", "Day & residential", "Karnataka", "Learning since 2010"].map(text => <span key={text}>{text}<Sparkles size={18} /></span>)}</div>)}</div></div>

    <section id="welcome" className="home-section home-intro"><div className="container-site"><div className="home-intro-heading"><span className="home-kicker">One school. A world of possibility.</span><h2>A childhood full of wonder.<br />A future <em>without limits.</em></h2></div><div className="home-intro-grid"><div className="home-intro-photo"><img src={img.welcome} alt="Students together at HKS Vidyamandir" loading="lazy" /><span className="home-photo-caption">Rooted in Karnataka. Ready for the world.</span></div><div className="home-intro-text"><h3>Strong roots.<br />Stronger wings.</h3><p>Since 2010, HKS Group of Institutions has brought together purposeful learning, individual care and the joy of growing up.</p><div className="home-intro-activities"><div><h4>Sports and Fitness</h4><p>Cricket, football, basketball, badminton, athletics, table tennis, Yoga and More.</p></div><div><h4>Arts and Culture</h4><p>Music, dance, visual arts, performances and cultural celebrations.</p></div><div><h4>Clubs and Leadership</h4><p>Public speaking, student clubs, house activities and competitions.</p></div></div><Action to="/contact">Contact Us</Action></div></div></div></section>

    <section className="home-advantage"><div className="container-site"><Heading label="The HKS advantage" title="Space to dream. Support to soar." /><AdvantageStats /><div className="home-usp-grid">{advantages.map(({ icon, title, text }, i) => <article key={title} data-motion-step={i % 4}><span className="home-usp-icon"><AdvantageIcon kind={icon} /></span><h3>{title.split(" ").map(word => <span key={word}>{word}</span>)}</h3><p>{text}</p></article>)}</div></div></section>

    <ProgrammeSelector />

    <PillarsShowcase />

    <section className="val-section"><div className="container-site"><div className="val-head"><span className="home-kicker">Care beyond the classroom</span><h2>Our <em>Offers</em></h2><p>Everyday support for student safety, wellbeing and a comfortable journey to school.</p></div><div className="val-grid">{([[Bus, "Transportation", "School buses connect the city and nearby areas, making the daily journey to and from HKS convenient for students and families."], [Cctv, "CCTV", "CCTV monitoring supports campus safety, helping maintain a secure environment where students can learn, play and grow."], [ShieldCheck, "Security", "A secure campus perimeter and safety measures help create a protected environment for students throughout the school day."], [HeartPulse, "Medical & First Aid", "Medical and first-aid support helps address minor injuries and everyday health concerns, keeping student wellbeing at the heart of school life."]] as const).map(([Icon, title, text], i) => <article key={title} className="val-card" data-motion-step={i % 2}><span className="val-icon"><Icon aria-hidden="true" /></span><div><span className="val-num">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <BeyondClassroom />

    <section className="evc-section"><div className="container-site"><div className="evc-head"><span className="home-kicker">Events &amp; community</span><h2>School is better, <em>together.</em></h2></div>{(() => { const event = eventStories[eventCategory] ?? eventStories[0]; if (!event) return null; const stories = [{ tab: "Events", date: event.label, title: event.title, sub: event.sub, text: event.text, image: event.image, alt: event.alt, badge: "EVENTS · EVENTS · EVENTS · ", Icon: event.Icon }, { tab: "Community", date: "Every day at HKS", title: "One school:", sub: "Many stories, one sense of belonging", text: "Parents, educators and students come together to support every child's growth, confidence and wellbeing - from orientation days to festivals and sports meets.", image: img.welcome, alt: "HKS school community", badge: "COMMUNITY · COMMUNITY · ", Icon: Users }]; const s = stories[community]; if (!s) return null; return <div className={`evc-folders is-${community}`}><div className="evc-tabs" role="tablist" aria-label="Community stories">{stories.map((st, i) => <Button variant="ghost" key={st.tab} type="button" role="tab" id={`evc-tab-${i}`} aria-selected={community === i} aria-controls="evc-panel" className={`evc-tab ${community === i ? "is-active" : ""}`} tabIndex={community === i ? 0 : -1} onKeyDown={event => { const next = event.key === "ArrowRight" ? (i + 1) % stories.length : event.key === "ArrowLeft" ? (i + stories.length - 1) % stories.length : event.key === "Home" ? 0 : event.key === "End" ? stories.length - 1 : undefined; if (next === undefined) return; event.preventDefault(); setCommunity(next); document.getElementById(`evc-tab-${next}`)?.focus(); }} onClick={() => setCommunity(i)}><st.Icon aria-hidden="true" />{st.tab}</Button>)}</div><div className="evc-panel" id="evc-panel" role="tabpanel" aria-labelledby={`evc-tab-${community}`} key={community}><div className="evc-copy">{community === 0 && <div className="evc-event-choices" role="group" aria-label="Event categories">{eventStories.map((item, i) => <Button key={item.label} type="button" variant="ghost" aria-pressed={eventCategory === i} className="evc-event-choice" onClick={() => setEventCategory(i)}><item.Icon aria-hidden="true" />{item.label}</Button>)}</div>}<span className="evc-date">{s.date}</span><h3>{s.title}<span>{s.sub}</span></h3><p>{s.text}</p><Action to="/campus-life">Life at HKS</Action></div><div className="evc-media"><img src={s.image} alt={s.alt} loading="lazy" /><div className="evc-badge" aria-hidden><svg viewBox="0 0 120 120"><defs><path id={`evc-circle-${community}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href={`#evc-circle-${community}`} textLength="286" lengthAdjust="spacing">{s.badge}</textPath></text></svg><span><s.Icon /></span></div></div></div></div>; })()}</div></section>

    <LifeGallery />

    <nav className="qk-band" aria-label="Explore HKS"><div className="container-site qk-inner"><div className="qk-tiles">{([{ t: "Admissions", to: "/admissions", Icon: Users }, { t: "Curriculum", to: "/academics", Icon: BookOpen }, { t: "Campus Life", to: "/campus-life", Icon: Sparkles }, { t: "Residential Life", to: "/boarding", Icon: Heart }] as const).map(({ t, to, Icon }, i) => <Button asChild variant="ghost" key={t} className="qk-tile"><Link to={to} data-motion-step={i}><span className="qk-icon"><Icon aria-hidden="true" /></span><span className="qk-title">{t}</span></Link></Button>)}</div><Button asChild className="qk-cta"><Link to="/admissions">Find out more <ArrowRight aria-hidden="true" /></Link></Button></div></nav>

    <StudentsSpeak />
    <FamilyStories />

    <ExperienceStories />

    <section className="loc-section"><div className="container-site"><div className="loc-head"><span className="home-kicker">Our home</span><h2>A world of learning. <em>Closer to home.</em></h2><p><MapPin size={16} /> NH 75, Bengaluru - Mangaluru Highway, Kenchattahalli, Karnataka</p></div><div className="loc-grid"><VisitChooser centered><Button type="button" variant="ghost" className="loc-card loc-visit-trigger" data-motion-step={0} aria-label="Our Campus"><div className="loc-frame"><img src={img.campus2} alt="HKS Vidyamandir campus" loading="lazy" /></div><span className="loc-label"><span>Our Campus</span><ArrowUpRight size={18} /></span></Button></VisitChooser><div className="loc-card" data-motion-step={1}><div className="loc-frame"><iframe title="HKS Vidyamandir location map" src={SITE.mapsEmbed} loading="lazy" /></div><a className="loc-label" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"><span>Get Directions</span><ArrowUpRight size={18} /></a></div></div></div></section>

    <section className="home-tour"><img src={img.campus1} alt="Visit the HKS Vidyamandir campus" loading="lazy" /><div className="container-site"><span className="home-kicker">Come and meet us</span><h2>Your next chapter<br />starts with a visit.</h2><p>Explore our classrooms, labs, hostels and playgrounds.<br />Meet the people who make HKS a school to belong to.</p><VisitChooser><Button type="button" variant="secondary" className="home-action">Book a campus tour<ArrowUpRight /></Button></VisitChooser></div><svg className="tour-waves" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true"><path className="tw1" d="M0 70 C240 10 480 130 720 70 S1200 10 1440 70 V160 H0Z"/><path className="tw2" d="M0 100 C300 40 540 150 860 95 S1260 50 1440 100 V160 H0Z"/><path className="tw3" d="M0 125 C260 90 600 160 900 120 S1280 95 1440 125 V160 H0Z"/></svg></section>

    <section className="home-final"><div className="container-site"><div className="final-card"><span className="final-badge"><span className="final-dot" />Admissions 2027-28 open</span><h2>Want to be part of<br />the <em>HKS story?</em></h2><p>Admissions for 2027-28 are open from Nursery to Grade 12, for day and residential students. Start your child's journey today.</p><div className="final-actions"><Button asChild className="final-btn solid"><Link to="/admissions">Get admission form <ArrowUpRight size={18} /></Link></Button><VisitChooser><Button type="button" className="final-btn ghost">Schedule a campus visit</Button></VisitChooser></div></div></div></section>
  </div>;
}
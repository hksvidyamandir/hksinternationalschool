import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, Heart, Sparkles, Trophy, FlaskConical, Globe2, Users, ShieldCheck, Pause, Play, MapPin, Quote, Check, Target, Handshake, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";
import { SITE } from "@/lib/site";
import { HeroFilm } from "./HeroFilm";
import { FamilyStories } from "./FamilyStories";
import { StudentsSpeak } from "./StudentsSpeak";
import { useHomeMotion } from "@/hooks/use-home-motion";
import { ExperienceStories } from "./ExperienceStories";
import { AdvantageStats } from "./AdvantageStats";
import { CurriculumShowcase } from "./CurriculumShowcase";
import { AdvantageIcon, type AdvantageIconKind } from "./AdvantageIcon";
import { ProgrammeSelector } from "./ProgrammeSelector";
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
const pillars = [
  { title: "Academic excellence", tag: "Think deeply", desc: "Concept-first CBSE learning, labs and mentoring that build sharp, curious minds.", image: img.acad1, to: "/academics" as const },
  { title: "Holistic development", tag: "Grow fully", desc: "Sports, arts and leadership that shape confident, well-rounded children.", image: img.campus4, to: "/sports" as const },
  { title: "A caring community", tag: "Belong here", desc: "Teachers, families and friends who know every child by name.", image: img.welcome, to: "/campus-life" as const },
  { title: "Individual possibility", tag: "Become yourself", desc: "Personal attention that helps each learner find and follow their strengths.", image: img.campus3, to: "/why-hks" as const },
];
const beyond = [
  { title: "Science & discovery", icon: FlaskConical, desc: "Labs and experiments that turn questions into discoveries.", image: img.infra1, to: "/experiential-learning" as const },
  { title: "Technology & innovation", icon: Sparkles, desc: "Coding, robotics and STEM projects for future makers.", image: img.infra2, to: "/experiential-learning" as const },
  { title: "Sport & movement", icon: Trophy, desc: "Fields, courts and coaching that build team spirit.", image: img.campus4, to: "/sports" as const },
  { title: "Creativity & expression", icon: Heart, desc: "Music, dance, art and stage moments to shine.", image: img.campus3, to: "/campus-life" as const },
  { title: "Spaces to explore", icon: Globe2, desc: "A green, safe campus designed for curious minds.", image: img.infra3, to: "/campus" as const },
  { title: "A home away from home", icon: Users, desc: "Caring residential life with structure and warmth.", image: img.infra4, to: "/boarding" as const },
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
  const activeGallery = galleries[gallery];
  if (!activeGallery) return null;
  return <div className="hks-home" ref={motionRef}>
    <HeroFilm />

    <div className="home-trust"><div className="home-marquee">{[0, 1].map(i => <div key={i} aria-hidden={i === 1}>{["CBSE curriculum", "Nursery to Grade 12", "Day & residential", "Karnataka", "Learning since 2010"].map(text => <span key={text}>{text}<Sparkles size={18} /></span>)}</div>)}</div></div>

    <section id="welcome" className="home-section home-intro"><div className="container-site"><div className="home-intro-heading"><span className="home-kicker">One school. A world of possibility.</span><h2>A childhood full of wonder.<br />A future <em>without limits.</em></h2></div><div className="home-intro-grid"><div className="home-intro-photo"><img src={img.welcome} alt="Students together at HKS Vidyamandir" loading="lazy" /><span className="home-photo-caption">Rooted in Karnataka. Ready for the world.</span></div><div className="home-intro-text"><span className="home-section-number">01 / THE HKS SPIRIT</span><h3>Strong roots.<br />Stronger wings.</h3><p>Since 2010, HKS Vidyamandir has brought together purposeful learning, individual care and the joy of growing up.</p><p>Our English-medium CBSE day and residential school in Karnataka nurtures curious minds from Nursery to Grade 12 — in the classroom and far beyond it.</p><Action to="/about">Meet HKS</Action></div></div></div></section>

    <section className="home-advantage"><div className="container-site"><Heading label="The HKS advantage" title="Space to dream. Support to soar." /><AdvantageStats /><div className="home-usp-grid">{advantages.map(({ icon, title, text }, i) => <article key={title} data-motion-step={i % 4}><span className="home-usp-icon"><AdvantageIcon kind={icon} /></span><h3>{title.split(" ").map(word => <span key={word}>{word}</span>)}</h3><p>{text}</p></article>)}</div></div></section>

    <ProgrammeSelector />

    <CurriculumShowcase />

    <section className="home-section pil-section"><div className="container-site"><div className="pil-head"><div><span className="home-kicker">Our purpose &amp; strengths</span><h2>The <em>HKS</em> Pillars</h2></div><p>At HKS, learning is grounded in <strong>Excellence, Growth and Community</strong>. These pillars shape an education that balances academic rigour with wellbeing, belonging and character.</p></div><div className="pil-grid">{pillars.map((p, i) => <Link key={p.title} to={p.to} className="pil-card" data-motion-step={i}><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><span className="pil-num">0{i + 1}</span><div className="pil-body"><small>{p.tag}</small><h3>{p.title}</h3><p>{p.desc}</p><span className="pil-more">Explore <ArrowUpRight /></span></div></Link>)}</div></div></section>

    <section className="val-section"><div className="container-site"><div className="val-head"><span className="home-kicker">What guides us</span><h2>Our <em>Offers</em></h2><p>Values for life, not just school — the habits of heart and mind every HKS learner carries forward.</p></div><div className="val-grid">{([[ShieldCheck, "Integrity", "We do what is right, even when no one is watching, and build trust through honesty in every word and action."], [Trophy, "Excellence", "We give our personal best in the classroom, on the field and on stage, and celebrate steady growth."], [Handshake, "Respect", "We value every individual — students, staff and families — and nurture relationships built on kindness."], [Lightbulb, "Curiosity", "We never stop at why. Questions, experiments and exploration keep learning joyful and alive."], [Heart, "Compassion", "We lead with empathy, care for one another and give back to the community around us."], [Target, "Discipline", "We grow through commitment, routine and responsibility, turning small efforts into big achievements."]] as const).map(([Icon, title, text], i) => <article key={title} className="val-card" data-motion-step={i % 2}><span className="val-icon"><Icon /></span><div><span className="val-num">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="home-section"><div className="container-site"><Heading label="Beyond the classroom" title="Discover what makes you, you." text="Room for a new passion. Space for an unexpected talent." /><div className="home-beyond-grid">{beyond.map(p => <Link key={p.title} to={p.to}><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><div><h3>{p.title}</h3><span><ArrowUpRight /></span></div></Link>)}</div></div></section>

    <section className="evc-section"><div className="container-site"><div className="evc-head"><span className="home-kicker">Events &amp; community</span><h2>School is better, <em>together.</em></h2></div>{(() => { const stories = [{ tab: "Events", date: "Annual Day · 2025", title: "Annual Day:", sub: "A celebration of every talent", text: "Dance, drama, music and art fill our stage as every child takes a bow. Friendships, teamwork and new experiences make a school day about so much more than lessons.", image: img.campus5, alt: "Annual Day performance at HKS", badge: "EVENTS · EVENTS · EVENTS · ", Icon: Sparkles }, { tab: "Community", date: "Every day at HKS", title: "One school:", sub: "Many stories, one sense of belonging", text: "Parents, educators and students come together to support every child's growth, confidence and wellbeing — from orientation days to festivals and sports meets.", image: img.welcome, alt: "HKS school community", badge: "COMMUNITY · COMMUNITY · ", Icon: Users }]; const s = stories[community]; if (!s) return null; return <div className={`evc-folders is-${community}`}><div className="evc-tabs" role="tablist" aria-label="Community stories">{stories.map((st, i) => <Button variant="ghost" key={st.tab} type="button" role="tab" id={`evc-tab-${i}`} aria-selected={community === i} aria-controls="evc-panel" className={`evc-tab ${community === i ? "is-active" : ""}`} tabIndex={community === i ? 0 : -1} onKeyDown={event => { const next = event.key === "ArrowRight" ? (i + 1) % stories.length : event.key === "ArrowLeft" ? (i + stories.length - 1) % stories.length : event.key === "Home" ? 0 : event.key === "End" ? stories.length - 1 : undefined; if (next === undefined) return; event.preventDefault(); setCommunity(next); document.getElementById(`evc-tab-${next}`)?.focus(); }} onClick={() => setCommunity(i)}><st.Icon aria-hidden="true" />{st.tab}</Button>)}</div><div className="evc-panel" id="evc-panel" role="tabpanel" aria-labelledby={`evc-tab-${community}`} key={community}><div className="evc-copy"><span className="evc-date">{s.date}</span><h3>{s.title}<span>{s.sub}</span></h3><p>{s.text}</p><Action to="/campus-life">Life at HKS</Action></div><div className="evc-media"><img src={s.image} alt={s.alt} loading="lazy" /><div className="evc-badge" aria-hidden><svg viewBox="0 0 120 120"><defs><path id={`evc-circle-${community}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href={`#evc-circle-${community}`} textLength="286" lengthAdjust="spacing">{s.badge}</textPath></text></svg><span><s.Icon /></span></div></div></div></div>; })()}</div></section>

    <section className="win-section"><div className="container-site"><div className="win-head"><span className="home-kicker">A window into our world</span><h2>Experience life, <em>the HKS way.</em></h2><p>Individual excellence, collective progress</p></div><div className="win-grid">{([["Early Years (Nursery – Grade 2)", img.progMontessori, "/academics"], ["Primary School (Grades 3 – 5)", img.progElementary, "/academics"], ["Middle & High (Grades 6 – 10)", img.progCbse, "/academics"], ["Senior Secondary (Grades 11 – 12)", img.progSenior, "/academics"], ["Residential Life", img.infra4, "/boarding"], ["Science & Technology", img.infra1, "/experiential-learning"], ["The Arts", img.campus3, "/campus-life"], ["Sports", img.campus4, "/sports"]] as const).map(([label, src, to], i) => <Link key={label} to={to} className="win-tile" data-motion-step={i % 4}><img src={src} alt={label + " at HKS"} loading="lazy" /><span className="win-label"><i aria-hidden />{label}<ArrowUpRight /></span></Link>)}</div><div className="win-link"><Action to="/campus" light>See more of our campus</Action></div></div></section>

    <nav className="qk-band" aria-label="Explore HKS"><div className="container-site qk-inner"><div className="qk-tiles">{([{ t: "Admissions", to: "/admissions", Icon: Users }, { t: "Curriculum", to: "/academics", Icon: BookOpen }, { t: "Campus Life", to: "/campus-life", Icon: Sparkles }, { t: "Residential Life", to: "/boarding", Icon: Heart }] as const).map(({ t, to, Icon }, i) => <Button asChild variant="ghost" key={t} className="qk-tile"><Link to={to} data-motion-step={i}><span className="qk-number" aria-hidden="true">0{i + 1}</span><span className="qk-icon"><Icon aria-hidden="true" /></span><span className="qk-footer"><span className="qk-title">{t}</span><span className="qk-arrow" aria-hidden="true"><ArrowUpRight /></span></span></Link></Button>)}</div><Button asChild className="qk-cta"><Link to="/admissions">Find out more <ArrowRight aria-hidden="true" /></Link></Button></div></nav>

    <StudentsSpeak />
    <FamilyStories />

    <ExperienceStories />

    <section className="loc-section"><div className="container-site"><div className="loc-head"><span className="home-kicker">Our home</span><h2>A world of learning. <em>Closer to home.</em></h2><p><MapPin size={16} /> NH 75, Bengaluru – Mangaluru Highway, Kenchattahalli, Karnataka</p></div><div className="loc-grid"><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="loc-card" data-motion-step={0}><div className="loc-frame"><img src={img.campus2} alt="HKS Vidyamandir campus" loading="lazy" /></div><span className="loc-label"><span>Our Campus</span><ArrowUpRight size={18} /></span></a><div className="loc-card" data-motion-step={1}><div className="loc-frame"><iframe title="HKS Vidyamandir location map" src={SITE.mapsEmbed} loading="lazy" /></div><a className="loc-label" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"><span>Get Directions</span><ArrowUpRight size={18} /></a></div></div></div></section>

    <section className="home-tour"><img src={img.campus1} alt="Visit the HKS Vidyamandir campus" loading="lazy" /><div className="container-site"><span className="home-kicker">Come and meet us</span><h2>Your next chapter<br />starts with a visit.</h2><p>Explore our classrooms, labs, hostels and playgrounds.<br />Meet the people who make HKS a school to belong to.</p><Action to="/contact" light>Book a campus tour</Action></div><svg className="tour-waves" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true"><path className="tw1" d="M0 70 C240 10 480 130 720 70 S1200 10 1440 70 V160 H0Z"/><path className="tw2" d="M0 100 C300 40 540 150 860 95 S1260 50 1440 100 V160 H0Z"/><path className="tw3" d="M0 125 C260 90 600 160 900 120 S1280 95 1440 125 V160 H0Z"/></svg></section>

    <section className="home-final"><div className="container-site"><div className="final-card"><span className="final-orb a" aria-hidden="true" /><span className="final-orb b" aria-hidden="true" /><span className="final-badge"><span className="final-dot" />Admissions 2026–27 open</span><h2>Want to be part of the <em>HKS story?</em></h2><p>Admissions for 2026–27 are open from Nursery to Grade 12, for day and residential students. Start your child's journey today.</p><div className="final-actions"><Link to="/admissions" className="final-btn solid">Enquire about admissions <ArrowUpRight size={18} /></Link><Link to="/contact" className="final-btn ghost">Schedule a campus visit</Link></div></div></div></section>
  </div>;
}
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, Heart, Sparkles, Trophy, FlaskConical, Globe2, Users, ShieldCheck, Pause, Play, MapPin, Quote, Check, Target, Eye, Handshake, Lightbulb } from "lucide-react";
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

const programmes = [
  { title: "Early Years", grade: "Nursery – Grade 2", image: img.progMontessori, text: "Small discoveries. A strong beginning. Play, stories and exploration build the foundations for a lifelong love of learning." },
  { title: "Primary", grade: "Grades 3 – 5", image: img.progElementary, text: "Curiosity becomes confidence through literacy, numeracy, collaborative projects and hands-on discovery." },
  { title: "Middle & High", grade: "Grades 6 – 10", image: img.progCbse, text: "Deeper understanding, independent thinking and real-world application, with coding and competitive exam foundations." },
  { title: "Senior Secondary", grade: "Grades 11 – 12", image: img.progSenior, text: "Science and Commerce pathways that connect academic ambition with purposeful career guidance." },
];
const advantages = [
  { icon: Users, title: "Seen as an individual", text: "Personal attention and support for each learner." },
  { icon: Sparkles, title: "More than marks", text: "Academic growth, creativity and character, together." },
  { icon: FlaskConical, title: "Learning by doing", text: "Science, STEM, robotics and real-world projects." },
  { icon: Globe2, title: "A wider perspective", text: "Global exposure and international test preparation." },
  { icon: BookOpen, title: "Understanding first", text: "Concept-based, application-oriented CBSE learning." },
  { icon: ShieldCheck, title: "Room to thrive", text: "Classrooms, residential care and space to explore." },
  { icon: Trophy, title: "Ready for the next step", text: "NEET, JEE and Olympiad foundations." },
  { icon: Heart, title: "Care that counts", text: "Remedial and advanced support for different needs." },
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
  const [programme, setProgramme] = useState(0);
  const [gallery, setGallery] = useState(0);
  const [community, setCommunity] = useState(0);
  const activeProgramme = programmes[programme];
  const activeGallery = galleries[gallery];
  if (!activeProgramme || !activeGallery) return null;
  return <div className="hks-home" ref={motionRef}>
    <HeroFilm />

    <div className="home-trust"><div className="home-marquee">{[0, 1].map(i => <div key={i} aria-hidden={i === 1}>{["CBSE curriculum", "Nursery to Grade 12", "Day & residential", "Karnataka", "Learning since 2010"].map(text => <span key={text}>{text}<Sparkles size={18} /></span>)}</div>)}</div></div>

    <section id="welcome" className="home-section home-intro"><div className="container-site"><div className="home-intro-heading"><span className="home-kicker">One school. A world of possibility.</span><h2>A childhood full of wonder.<br />A future <em>without limits.</em></h2></div><div className="home-intro-grid"><div className="home-intro-photo"><img src={img.welcome} alt="Students together at HKS International School" loading="lazy" /><span className="home-photo-caption">Rooted in Karnataka. Ready for the world.</span></div><div className="home-intro-text"><span className="home-section-number">01 / THE HKS SPIRIT</span><h3>Strong roots.<br />Stronger wings.</h3><p>Since 2010, HKS International School has brought together purposeful learning, individual care and the joy of growing up.</p><p>Our English-medium CBSE day and residential school in Karnataka nurtures curious minds from Nursery to Grade 12 — in the classroom and far beyond it.</p><Action to="/about">Meet HKS</Action></div></div></div></section>

    <section className="home-advantage"><div className="container-site"><Heading label="The HKS advantage" title="Space to dream. Support to soar." /><AdvantageStats /><div className="home-usp-grid">{advantages.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="home-section home-programmes"><div className="container-site"><Heading label="Our programmes" title="Every age. A new possibility." text="An education that grows with your child." /><div className="home-programme-orbits" role="tablist" aria-label="School programmes">{programmes.map((p, i) => <Button key={p.title} role="tab" aria-selected={programme === i} aria-controls="programme-detail" id={`programme-${i}`} variant="ghost" onClick={() => setProgramme(i)} className={`home-orbit ${programme === i ? "is-active" : ""}`}><img src={p.image} alt="" aria-hidden="true" loading="lazy" /><em>0{i + 1}</em><span>{p.title}</span><small>{p.grade}</small></Button>)}</div><div id="programme-detail" role="tabpanel" aria-labelledby={`programme-${programme}`} className="home-programme-detail"><img src={activeProgramme.image} alt={`${activeProgramme.title} students at HKS`} loading="lazy" /><div><span className="home-kicker">{activeProgramme.grade}</span><h3>{activeProgramme.title}</h3><p>{activeProgramme.text}</p><Action to="/academics">Explore the programme</Action></div></div></div></section>

    <CurriculumShowcase />

    <section className="home-section pil-section"><div className="container-site"><div className="pil-head"><div><span className="home-kicker">Our purpose &amp; strengths</span><h2>The <em>HKS</em> Pillars</h2></div><p>At HKS, learning is grounded in <strong>Excellence, Growth and Community</strong>. These pillars shape an education that balances academic rigour with wellbeing, belonging and character.</p></div><div className="pil-grid">{pillars.map((p, i) => <Link key={p.title} to={p.to} className="pil-card" data-motion-step={i}><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><span className="pil-num">0{i + 1}</span><div className="pil-body"><small>{p.tag}</small><h3>{p.title}</h3><p>{p.desc}</p><span className="pil-more">Explore <ArrowUpRight /></span></div></Link>)}</div></div></section>

    <section className="pur-section"><span className="pur-orb pur-orb-a" aria-hidden /><span className="pur-orb pur-orb-b" aria-hidden /><span className="pur-arc" aria-hidden /><div className="container-site"><div className="pur-head"><span className="home-kicker">Our purpose</span><h2>Dream it. Learn it. <em>Achieve it.</em></h2></div><div className="pur-grid"><article className="pur-card" data-motion-step={0}><span className="pur-icon"><Target /></span><h3>Our <em>Mission</em></h3><p>To deliver accessible, holistic, high-quality education through concept-based learning, modern facilities and individual care for every learner.</p></article><span className="pur-divider" aria-hidden><Sparkles /></span><article className="pur-card" data-motion-step={1}><span className="pur-icon"><Eye /></span><h3>Our <em>Vision</em></h3><p>To be a centre of excellence that nurtures globally competent, culturally rooted and compassionate citizens who lead with integrity.</p></article></div></div></section>

    <section className="val-section"><div className="container-site"><div className="val-head"><span className="home-kicker">What guides us</span><h2>Our <em>Values</em></h2><p>Values for life, not just school — the habits of heart and mind every HKS learner carries forward.</p></div><div className="val-grid">{([[ShieldCheck, "Integrity", "We do what is right, even when no one is watching, and build trust through honesty in every word and action."], [Trophy, "Excellence", "We give our personal best in the classroom, on the field and on stage, and celebrate steady growth."], [Handshake, "Respect", "We value every individual — students, staff and families — and nurture relationships built on kindness."], [Lightbulb, "Curiosity", "We never stop at why. Questions, experiments and exploration keep learning joyful and alive."], [Heart, "Compassion", "We lead with empathy, care for one another and give back to the community around us."], [Target, "Discipline", "We grow through commitment, routine and responsibility, turning small efforts into big achievements."]] as const).map(([Icon, title, text], i) => <article key={title} className="val-card" data-motion-step={i % 2}><span className="val-icon"><Icon /></span><div><span className="val-num">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="home-section"><div className="container-site"><Heading label="Beyond the classroom" title="Discover what makes you, you." text="Room for a new passion. Space for an unexpected talent." /><div className="home-beyond-grid">{beyond.map(p => <Link key={p.title} to={p.to}><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><div><h3>{p.title}</h3><span><ArrowUpRight /></span></div></Link>)}</div></div></section>

    <section className="evc-section"><div className="container-site"><div className="evc-head"><span className="home-kicker">Events &amp; community</span><h2>School is better, <em>together.</em></h2></div>{(() => { const stories = [{ tab: "Events", date: "Annual Day · 2025", title: "Annual Day:", sub: "A celebration of every talent", text: "Dance, drama, music and art fill our stage as every child takes a bow. Friendships, teamwork and new experiences make a school day about so much more than lessons.", image: img.campus5, alt: "Annual Day performance at HKS", badge: "EVENTS · EVENTS · EVENTS · ", Icon: Sparkles }, { tab: "Community", date: "Every day at HKS", title: "One school:", sub: "Many stories, one sense of belonging", text: "Parents, educators and students come together to support every child's growth, confidence and wellbeing — from orientation days to festivals and sports meets.", image: img.welcome, alt: "HKS school community", badge: "COMMUNITY · COMMUNITY · ", Icon: Users }]; const s = stories[community]!; const back = stories[1 - community]!; return <div className={`evc-folders is-${community}`}><div className="evc-tabs" role="tablist" aria-label="Community stories">{stories.map((st, i) => <button key={st.tab} type="button" role="tab" id={`evc-tab-${i}`} aria-selected={community === i} aria-controls="evc-panel" className={`evc-tab ${community === i ? "is-active" : ""}`} onClick={() => setCommunity(i)}>{st.tab}</button>)}</div><div className="evc-back" aria-hidden><img src={back.image} alt="" loading="lazy" /></div><div className="evc-panel" id="evc-panel" role="tabpanel" aria-labelledby={`evc-tab-${community}`} key={community}><div className="evc-copy"><span className="evc-date">{s.date}</span><h3>{s.title}<span>{s.sub}</span></h3><p>{s.text}</p><Action to="/campus-life">Life at HKS</Action></div><div className="evc-media"><img src={s.image} alt={s.alt} loading="lazy" /><div className="evc-badge" aria-hidden><svg viewBox="0 0 120 120"><defs><path id={`evc-circle-${community}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href={`#evc-circle-${community}`} textLength="286" lengthAdjust="spacing">{s.badge}</textPath></text></svg><span><s.Icon /></span></div></div></div></div>; })()}</div></section>

    <section className="win-section"><div className="container-site"><div className="win-head"><span className="home-kicker">A window into our world</span><h2>Experience life, <em>the HKS way.</em></h2><p>Individual excellence, collective progress</p></div><div className="win-grid">{([["Early Years (Nursery – Grade 2)", img.progMontessori, "/academics"], ["Primary School (Grades 3 – 5)", img.progElementary, "/academics"], ["Middle & High (Grades 6 – 10)", img.progCbse, "/academics"], ["Senior Secondary (Grades 11 – 12)", img.progSenior, "/academics"], ["Residential Life", img.infra4, "/boarding"], ["Science & Technology", img.infra1, "/experiential-learning"], ["The Arts", img.campus3, "/campus-life"], ["Sports", img.campus4, "/sports"]] as const).map(([label, src, to], i) => <Link key={label} to={to} className="win-tile" data-motion-step={i % 4}><img src={src} alt={label + " at HKS"} loading="lazy" /><span className="win-label"><i aria-hidden />{label}<ArrowUpRight /></span></Link>)}</div><div className="win-link"><Action to="/campus" light>See more of our campus</Action></div></div></section>

    <nav className="qk-band" aria-label="Explore HKS"><div className="container-site qk-inner"><div className="qk-tiles">{([{ t: "Admissions", to: "/admissions", Icon: Users }, { t: "Curriculum", to: "/academics", Icon: BookOpen }, { t: "Campus Life", to: "/campus-life", Icon: Sparkles }, { t: "Residential Life", to: "/boarding", Icon: Heart }] as const).map(({ t, to, Icon }, i) => <Link key={t} to={to} className="qk-tile" data-motion-step={i}><span className="qk-icon"><Icon /></span><span>{t}</span></Link>)}</div><Link to="/admissions" className="qk-cta">Find out more <ArrowRight /></Link></div></nav>

    <StudentsSpeak />
    <FamilyStories />

    <ExperienceStories />

    <section className="home-section home-location"><div className="container-site"><div className="home-section-top"><Heading label="Our home" title="A world of learning. Closer to home." /><p>NH 75, Kenchattahalli<br />Karnataka</p></div><div className="home-location-grid"><div className="home-location-photo"><img src={img.campus2} alt="HKS International School campus" loading="lazy" /><div><MapPin /><h3>HKS International School</h3><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={17} /></a></div></div><iframe title="HKS International School location map" src={SITE.mapsEmbed} loading="lazy" /></div></div></section>

    <section className="home-tour"><img src={img.campus1} alt="Visit the HKS International School campus" loading="lazy" /><div className="container-site"><span className="home-kicker">Come and meet us</span><h2>Your next chapter<br />starts with a visit.</h2><p>Explore our classrooms, labs, hostels and playgrounds.<br />Meet the people who make HKS a school to belong to.</p><Action to="/contact" light>Schedule a school tour</Action></div></section>

    <section className="home-final"><div className="container-site"><span className="home-kicker">Admissions 2026–27</span><h2>Ready to spread<br /><em>your wings?</em></h2><div><Action to="/admissions">Begin your HKS journey</Action><a className="home-text-link" href={SITE.phoneHref}>Speak to us <ArrowUpRight size={20} /></a></div><p>Nursery to Grade 12 · Day & residential</p></div></section>
  </div>;
}
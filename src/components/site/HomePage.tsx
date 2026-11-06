import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, Heart, Sparkles, Trophy, FlaskConical, Globe2, Users, ShieldCheck, Pause, Play, MapPin, Quote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { img } from "@/assets/site";
import { SITE } from "@/lib/site";
import { HeroFilm } from "./HeroFilm";
import { FamilyStories } from "./FamilyStories";

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
  { title: "Academic excellence", tag: "Think deeply", image: img.acad1, to: "/academics" as const },
  { title: "Holistic development", tag: "Grow fully", image: img.campus4, to: "/sports" as const },
  { title: "A caring community", tag: "Belong here", image: img.welcome, to: "/campus-life" as const },
  { title: "Individual possibility", tag: "Become yourself", image: img.campus3, to: "/why-hks" as const },
];
const beyond = [
  { title: "Science & discovery", image: img.infra1, to: "/experiential-learning" as const },
  { title: "Technology & innovation", image: img.infra2, to: "/experiential-learning" as const },
  { title: "Sport & movement", image: img.campus4, to: "/sports" as const },
  { title: "Creativity & expression", image: img.campus3, to: "/campus-life" as const },
  { title: "Spaces to explore", image: img.infra3, to: "/campus" as const },
  { title: "A home away from home", image: img.infra4, to: "/boarding" as const },
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
  const [programme, setProgramme] = useState(0);
  const [gallery, setGallery] = useState(0);
  const [community, setCommunity] = useState(0);
  const activeProgramme = programmes[programme];
  const activeGallery = galleries[gallery];
  if (!activeProgramme || !activeGallery) return null;
  return <div className="hks-home">
    <HeroFilm />

    <div className="home-trust"><div className="home-marquee">{[0, 1].map(i => <div key={i} aria-hidden={i === 1}>{["CBSE curriculum", "Nursery to Grade 12", "Day & residential", "Hassan · Karnataka", "Learning since 2010"].map(text => <span key={text}>{text}<Sparkles size={18} /></span>)}</div>)}</div></div>

    <section id="welcome" className="home-section home-intro"><div className="container-site"><div className="home-intro-heading"><span className="home-kicker">One school. A world of possibility.</span><h2>A childhood full of wonder.<br />A future <em>without limits.</em></h2></div><div className="home-intro-grid"><div className="home-intro-photo"><img src={img.welcome} alt="Students together at HKS International School" loading="lazy" /><span className="home-photo-caption">Rooted in Hassan. Ready for the world.</span></div><div className="home-intro-text"><span className="home-section-number">01 / THE HKS SPIRIT</span><h3>Strong roots.<br />Stronger wings.</h3><p>Since 2010, HKS International School has brought together purposeful learning, individual care and the joy of growing up.</p><p>Our English-medium CBSE day and residential school in Hassan nurtures curious minds from Nursery to Grade 12 — in the classroom and far beyond it.</p><Action to="/about">Meet HKS</Action></div></div></div></section>

    <section className="home-advantage"><div className="container-site"><Heading label="The HKS advantage" title="Space to dream. Support to soar." /><div className="home-proof-grid">{[["2010", "Our journey began", "A school rooted in Hassan."], ["N–12", "Every stage of growth", "From first steps to future pathways."], ["CBSE", "A strong foundation", "Concepts, curiosity and application."], ["DAY +", "Residential", "Two ways to belong to one community."]].map(([number, title, text]) => <div key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></div>)}</div><div className="home-usp-grid">{advantages.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="home-section home-programmes"><div className="container-site"><Heading label="Our programmes" title="Every age. A new possibility." text="An education that grows with your child." /><div className="home-programme-orbits" role="tablist" aria-label="School programmes">{programmes.map((p, i) => <Button key={p.title} role="tab" aria-selected={programme === i} aria-controls="programme-detail" id={`programme-${i}`} variant="ghost" onClick={() => setProgramme(i)} className={`home-orbit ${programme === i ? "is-active" : ""}`}><ArrowUpRight /><span>{p.title}</span><small>{p.grade}</small></Button>)}</div><div id="programme-detail" role="tabpanel" aria-labelledby={`programme-${programme}`} className="home-programme-detail"><img src={activeProgramme.image} alt={`${activeProgramme.title} students at HKS`} loading="lazy" /><div><span className="home-kicker">{activeProgramme.grade}</span><h3>{activeProgramme.title}</h3><p>{activeProgramme.text}</p><Action to="/academics">Explore the programme</Action></div></div></div></section>

    <section className="home-curriculum"><div className="container-site home-curriculum-grid"><div><span className="home-kicker">The HKS curriculum</span><h2>Not just learning.<br /><em>Understanding.</em></h2><p>A concept-based CBSE education that connects what children learn with the world they live in.</p><Action to="/academics" light>Discover our curriculum</Action></div><div className="home-curriculum-list">{[["01", "Concepts come first", "A clear foundation in core subjects."], ["02", "Ideas become action", "Experiments, projects and hands-on discovery."], ["03", "Ambition finds direction", "NEET, JEE, Olympiads and career guidance."]].map(([n, t, d]) => <div key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight /></div>)}</div></div></section>

    <section className="home-section"><div className="container-site"><div className="home-section-top"><Heading label="The HKS pillars" title="A whole education. A whole person." /><p>Academic ambition, personal growth and a sense of belonging — the foundations beneath every HKS journey.</p></div><div className="home-pillar-grid">{pillars.map((p, i) => <Link key={p.title} to={p.to} className="home-pillar"><div><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><span>0{i + 1}<ArrowUpRight /></span></div><small>{p.tag}</small><h3>{p.title}</h3></Link>)}</div></div></section>

    <section className="home-purpose"><div className="container-site"><div className="home-purpose-title"><span className="home-kicker">Our purpose</span><h2>Dream it. Learn it.<br /><em>Achieve it.</em></h2></div><div className="home-purpose-statements"><article><span>01 / Our vision</span><p>To be a centre of excellence that nurtures globally competent, culturally rooted and compassionate citizens who lead with integrity.</p></article><article><span>02 / Our mission</span><p>To deliver accessible, holistic, high-quality education through concept-based learning, modern facilities and individual care for every learner.</p></article></div></div></section>

    <section className="home-values"><div className="container-site"><Heading label="What guides us" title="Values for life, not just school." /><div className="home-values-grid">{[["Integrity", "Doing what is right."], ["Excellence", "Giving our personal best."], ["Respect", "Valuing every individual."], ["Curiosity", "Never stopping at why."], ["Compassion", "Leading with kindness."], ["Discipline", "Growing through commitment."]].map(([title, text], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="home-section"><div className="container-site"><Heading label="Beyond the classroom" title="Discover what makes you, you." text="Room for a new passion. Space for an unexpected talent." /><div className="home-beyond-grid">{beyond.map(p => <Link key={p.title} to={p.to}><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><div><h3>{p.title}</h3><span><ArrowUpRight /></span></div></Link>)}</div></div></section>

    <section className="home-community"><div className="container-site"><div className="home-section-top"><Heading label="Events & community" title="School is better, together." /><div className="home-segment" role="tablist" aria-label="Community stories">{["School life", "Our community"].map((t, i) => <Button variant="ghost" role="tab" aria-selected={community === i} aria-controls="community-story" id={`community-${i}`} key={t} onClick={() => setCommunity(i)} className={community === i ? "is-active" : ""}>{t}</Button>)}</div></div><div className="home-community-story" id="community-story" role="tabpanel" aria-labelledby={`community-${community}`}><img src={community === 0 ? img.campus5 : img.welcome} alt={community === 0 ? "School activities at HKS" : "HKS school community"} loading="lazy" /><div><span className="home-kicker">{community === 0 ? "Moments that matter" : "A shared journey"}</span><h3>{community === 0 ? "Where everyday moments become lasting memories." : "One school. Many stories. A shared sense of belonging."}</h3><p>{community === 0 ? "Friendships, teamwork, celebrations and new experiences make a school day about so much more than lessons." : "Parents, educators and students come together to support every child's growth, confidence and wellbeing."}</p><Action to="/campus-life">Life at HKS</Action></div></div></div></section>

    <section className="home-section home-gallery"><div className="container-site"><div className="home-section-top"><Heading label="A window into our world" title="Life at HKS, in pictures." /><div className="home-segment" role="tablist" aria-label="School gallery">{galleries.map((g, i) => <Button key={g.title} role="tab" aria-selected={gallery === i} aria-controls="gallery-photos" id={`gallery-${i}`} variant="ghost" className={gallery === i ? "is-active" : ""} onClick={() => setGallery(i)}>{g.title}</Button>)}</div></div><div id="gallery-photos" role="tabpanel" aria-labelledby={`gallery-${gallery}`} className="home-gallery-columns">{activeGallery.images.map((src, i) => <figure key={src}><img src={src} alt={gallery === 2 ? `HKS student achievement ${i + 1}` : `${activeGallery.title} at HKS, photograph ${i + 1}`} loading="lazy" /></figure>)}</div><div className="home-gallery-link"><Action to="/campus">See more of our campus</Action></div></div></section>

    <nav className="home-quicklinks" aria-label="Explore HKS"><div className="container-site">{[{ t: "Admissions", to: "/admissions" as const }, { t: "Curriculum", to: "/academics" as const }, { t: "Campus life", to: "/campus-life" as const }, { t: "Residential life", to: "/boarding" as const }].map(l => <Link key={l.t} to={l.to}>{l.t}<ArrowUpRight /></Link>)}</div></nav>

    <FamilyStories />

    <section className="home-stories"><div className="container-site"><Heading label="Our stories & experiences" title="Many ways to find your wings." /><div className="home-story-cards">{[{ image: img.acad3, title: "Curiosity in action", text: "A closer look at experiential learning.", to: "/experiential-learning" as const }, { image: img.campus4, title: "Confidence beyond the classroom", text: "Sport, teamwork and personal growth.", to: "/sports" as const }, { image: img.infra4, title: "A place to call home", text: "Discover the HKS residential programme.", to: "/boarding" as const }].map(p => <Link key={p.title} to={p.to}><img src={p.image} alt={p.title + " at HKS"} loading="lazy" /><div><ArrowUpRight /><h3>{p.title}</h3><p>{p.text}</p></div></Link>)}</div></div></section>

    <section className="home-section home-location"><div className="container-site"><div className="home-section-top"><Heading label="Our home in Hassan" title="A world of learning. Closer to home." /><p>NH 75, Kenchattahalli<br />Hassan, Karnataka</p></div><div className="home-location-grid"><div className="home-location-photo"><img src={img.campus2} alt="HKS International School campus, Hassan" loading="lazy" /><div><MapPin /><h3>HKS International School</h3><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={17} /></a></div></div><iframe title="HKS International School location map" src={SITE.mapsEmbed} loading="lazy" /></div></div></section>

    <section className="home-tour"><img src={img.campus1} alt="Visit the HKS International School campus" loading="lazy" /><div className="container-site"><span className="home-kicker">Come and meet us</span><h2>Your next chapter<br />starts with a visit.</h2><p>Explore our classrooms, labs, hostels and playgrounds.<br />Meet the people who make HKS a school to belong to.</p><Action to="/contact" light>Schedule a school tour</Action></div></section>

    <section className="home-final"><div className="container-site"><span className="home-kicker">Admissions 2026–27</span><h2>Ready to spread<br /><em>your wings?</em></h2><div><Action to="/admissions">Begin your HKS journey</Action><a className="home-text-link" href={SITE.phoneHref}>Speak to us <ArrowUpRight size={20} /></a></div><p>Nursery to Grade 12 · Day & residential · Hassan</p></div></section>
  </div>;
}
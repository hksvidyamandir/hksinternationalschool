import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, Heart, Sparkles, Trophy, FlaskConical, Globe2, Users, ShieldCheck, Pause, Play, MapPin, Quote, Bus, Cctv, HeartPulse, Palette } from "lucide-react";
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
import { EventsCommunity } from "./EventsCommunity";
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
  const activeGallery = galleries[gallery];
  if (!activeGallery) return null;
  return <div className="hks-home" ref={motionRef}>
    <HeroFilm />
    <RecognitionStrip />

    <section id="welcome" className="home-section home-intro"><div className="container-site"><div className="home-intro-heading"><span className="home-kicker">One school. A world of possibility.</span><h2>A childhood full of wonder.<br />A future <em>without limits.</em></h2></div><div className="home-intro-grid"><div className="home-intro-photo"><img src={img.welcome} alt="Students together at HKS Vidyamandir" loading="lazy" /><span className="home-photo-caption">Rooted in Karnataka. Ready for the world.</span></div><div className="home-intro-text"><h3>Strong roots.<br />Stronger wings.</h3><p>Since 2010, HKS Group of Institutions has brought together purposeful learning, individual care and the joy of growing up.</p><div className="home-intro-activities"><div><span className="home-intro-icon"><Trophy aria-hidden="true" /></span><div><h4>Sports and Fitness</h4><p>Cricket, football, basketball, badminton, athletics, table tennis, Yoga and More.</p></div></div><div><span className="home-intro-icon"><Palette aria-hidden="true" /></span><div><h4>Arts and Culture</h4><p>Music, dance, visual arts, performances and cultural celebrations.</p></div></div><div><span className="home-intro-icon"><Users aria-hidden="true" /></span><div><h4>Clubs and Leadership</h4><p>Public speaking, student clubs, house activities and competitions.</p></div></div></div><Action to="/contact">Contact Us</Action></div></div></div></section>

    <section className="home-advantage"><div className="container-site"><Heading label="The HKS advantage" title="Space to dream. Support to soar." /><AdvantageStats /><div className="home-usp-grid">{advantages.map(({ icon, title, text }, i) => <article key={title} data-motion-step={i % 4}><span className="home-usp-icon"><AdvantageIcon kind={icon} /></span><h3>{title.split(" ").map(word => <span key={word}>{word}</span>)}</h3><p>{text}</p></article>)}</div></div></section>

    <ProgrammeSelector />

    <PillarsShowcase />

    <section className="val-section"><div className="container-site"><div className="val-head"><span className="home-kicker">Care beyond the classroom</span><h2>Our <em>Offers</em></h2><p>Everyday support for student safety, wellbeing and a comfortable journey to school.</p></div><div className="val-grid">{([[Bus, "Transportation", "School buses connect the city and nearby areas, making the daily journey to and from HKS convenient for students and families."], [Cctv, "CCTV", "CCTV monitoring supports campus safety, helping maintain a secure environment where students can learn, play and grow."], [ShieldCheck, "Security", "A secure campus perimeter and safety measures help create a protected environment for students throughout the school day."], [HeartPulse, "Medical & First Aid", "Medical and first-aid support helps address minor injuries and everyday health concerns, keeping student wellbeing at the heart of school life."]] as const).map(([Icon, title, text], i) => <article key={title} className="val-card" data-motion-step={i % 2}><span className="val-icon"><Icon aria-hidden="true" /></span><div><span className="val-num">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <BeyondClassroom />

    <EventsCommunity />

    <LifeGallery />

    <nav className="qk-band" aria-label="Explore HKS"><div className="container-site qk-inner"><div className="qk-tiles">{([{ t: "Admissions", to: "/admissions", Icon: Users }, { t: "Curriculum", to: "/academics", Icon: BookOpen }, { t: "Campus Life", to: "/campus-life", Icon: Sparkles }, { t: "Residential Life", to: "/boarding", Icon: Heart }] as const).map(({ t, to, Icon }, i) => <Link key={t} to={to} className="qk-tile" data-motion-step={i}><span className="qk-icon"><Icon aria-hidden="true" /></span><span className="qk-title">{t}</span></Link>)}</div><div className="qk-actions"><Button asChild className="qk-cta"><a href="/hks-prospectus.pdf" download>Download our prospectus <ArrowRight aria-hidden="true" /></a></Button><Button asChild className="qk-cta"><Link to="/admissions">Apply for admission <ArrowRight aria-hidden="true" /></Link></Button></div></div></nav>

    <StudentsSpeak />
    <FamilyStories />

    <ExperienceStories />

    <section className="loc-section"><div className="container-site"><div className="loc-head"><span className="home-kicker">Our home</span><h2>A world of learning. <em>Closer to home.</em></h2><p><MapPin size={16} /> NH 75, Bengaluru - Mangaluru Highway, Kenchattahalli, Karnataka</p></div><div className="loc-grid"><VisitChooser centered><Button type="button" variant="ghost" className="loc-card loc-visit-trigger" data-motion-step={0} aria-label="Our Campus"><div className="loc-frame"><img src={img.campus2} alt="HKS Vidyamandir campus" loading="lazy" /></div><span className="loc-label"><span>Our Campus</span><ArrowUpRight size={18} /></span></Button></VisitChooser><div className="loc-card" data-motion-step={1}><div className="loc-frame"><iframe title="HKS Vidyamandir location map" src={SITE.mapsEmbed} loading="lazy" /></div><a className="loc-label" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"><span>Get Directions</span><ArrowUpRight size={18} /></a></div></div></div></section>

    <section className="home-tour"><img src={img.campus1} alt="Visit the HKS Vidyamandir campus" loading="lazy" /><div className="container-site"><span className="home-kicker">Come and meet us</span><h2>Your next chapter<br />starts with a visit.</h2><p>Explore our classrooms, labs, hostels and playgrounds.<br />Meet the people who make HKS a school to belong to.</p><VisitChooser><Button type="button" variant="secondary" className="home-action">Book a campus tour<ArrowUpRight /></Button></VisitChooser></div><svg className="tour-waves" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true"><path className="tw1" d="M0 70 C240 10 480 130 720 70 S1200 10 1440 70 V160 H0Z"/><path className="tw2" d="M0 100 C300 40 540 150 860 95 S1260 50 1440 100 V160 H0Z"/><path className="tw3" d="M0 125 C260 90 600 160 900 120 S1280 95 1440 125 V160 H0Z"/></svg></section>

    <section className="home-final"><div className="container-site"><div className="final-card"><span className="final-badge"><span className="final-dot" />Admissions 2027-28 open</span><h2>Want to be part of<br />the <em>HKS story?</em></h2><p>Admissions for 2027-28 are open from Nursery to Grade 12, for day and residential students. Start your child's journey today.</p><div className="final-actions"><Button asChild className="final-btn solid"><Link to="/admissions">Get admission form <ArrowUpRight size={18} /></Link></Button><VisitChooser><Button type="button" className="final-btn ghost">Schedule a campus visit</Button></VisitChooser></div></div></div></section>
  </div>;
}
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { img } from "@/assets/site";

const programmes = [
  { title: "Early Years", grade: "Nursery – Grade 2", image: img.progMontessori, text: "Small discoveries. A strong beginning. Play, stories and exploration build the foundations for a lifelong love of learning." },
  { title: "Primary", grade: "Grades 3 – 5", image: img.progElementary, text: "Curiosity becomes confidence through literacy, numeracy, collaborative projects and hands-on discovery." },
  { title: "Middle & High", grade: "Grades 6 – 10", image: img.progCbse, text: "Deeper understanding, independent thinking and real-world application, with coding and competitive exam foundations." },
  { title: "Senior Secondary", grade: "Grades 11 – 12", image: img.progSenior, text: "Science and Commerce pathways that connect academic ambition with purposeful career guidance." },
];

export function ProgrammeSelector() {
  const [selected, setSelected] = useState("0");
  const detailRef = useRef<HTMLDivElement>(null);
  const revealDetail = () => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    window.requestAnimationFrame(() => {
      const heading = detailRef.current?.querySelector("[role='tabpanel'][data-state='active'] h3");
      if (!heading) return;
      const bounds = heading.getBoundingClientRect();
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
      if (bounds.top >= headerHeight + 16 && bounds.bottom <= window.innerHeight - 24) return;
      window.scrollTo({ top: window.scrollY + bounds.top - headerHeight - 24, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });
  };

  return (
    <section className="home-section home-programmes">
      <div className="container-site">
        <div className="home-heading"><span className="home-kicker">Our programmes</span><h2>Every age. A new possibility.</h2><p>An education that grows with your child.</p></div>
        <Tabs value={selected} onValueChange={setSelected} className="programme-selector">
          <TabsList className="home-programme-orbits" aria-label="School programmes">
            {programmes.map((programme, index) => (
              <div key={programme.title} className={`programme-choice ${selected === String(index) ? "is-selected" : ""}`}>
                <TabsTrigger value={String(index)} asChild>
                  <Button variant="ghost" onClick={revealDetail} className={`home-orbit ${selected === String(index) ? "is-active" : ""}`}>
                    <img src={programme.image} alt="" aria-hidden="true" loading="lazy" />
                    <em aria-hidden="true">0{index + 1}</em><span>{programme.title}</span><small>{programme.grade}</small>
                  </Button>
                </TabsTrigger>
                <span className="programme-selected-mark" aria-hidden="true"><Check /></span>
              </div>
            ))}
          </TabsList>
          <div className="programme-panels" ref={detailRef}>
            {programmes.map((programme, index) => (
              <TabsContent key={programme.title} value={String(index)} className="home-programme-detail">
                <img src={programme.image} alt={`${programme.title} students at HKS`} loading="lazy" />
                <div className="programme-copy">
                  <div className="programme-detail-label"><span aria-hidden="true">0{index + 1}</span><span className="home-kicker">{programme.grade}</span></div>
                  <h3>{programme.title}</h3><p>{programme.text}</p>
                  <Button asChild className="home-action"><Link to="/academics">Explore the programme<ArrowUpRight /></Link></Button>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
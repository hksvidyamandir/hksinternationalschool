import { useState, type ReactElement } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Video } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const visitOptions = [
  { visit: "virtual" as const, icon: Video, title: "Schedule a virtual visit", note: "Guided online tour, from home" },
  { visit: "tour" as const, icon: MapPin, title: "Campus tour", note: "Walk the campus with us" },
];

export function VisitChooser({ children }: { children: ReactElement }) {
  const [open, setOpen] = useState(false);
  return <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>{children}</PopoverTrigger>
    <PopoverContent side="top" align="start" className="home-visit-panel" aria-label="Choose your visit">
      <p>How would you like to visit?</p>
      {visitOptions.map(({ visit, icon: Icon, title, note }) => <Link key={visit} to="/contact" search={{ visit }} className="home-visit-option" onClick={() => setOpen(false)}>
        <span className="home-visit-icon"><Icon size={18} /></span>
        <span className="home-visit-copy"><strong>{title}</strong><small>{note}</small></span>
        <ArrowUpRight size={16} className="home-visit-arrow" />
      </Link>)}
    </PopoverContent>
  </Popover>;
}

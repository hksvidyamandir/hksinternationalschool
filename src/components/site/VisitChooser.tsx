import { useState, type ReactElement } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Video } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const visitOptions = [
  { visit: "virtual" as const, icon: Video, title: "Schedule a virtual visit", note: "Guided online tour, from home" },
  { visit: "tour" as const, icon: MapPin, title: "Campus tour", note: "Walk the campus with us" },
];

export function VisitChooser({ children, centered = false }: { children: ReactElement; centered?: boolean }) {
  const [open, setOpen] = useState(false);
  const options = visitOptions.map(({ visit, icon: Icon, title, note }) => <Link key={visit} to="/contact" search={{ visit }} className="home-visit-option" onClick={() => setOpen(false)}>
    <span className="home-visit-icon"><Icon size={18} /></span>
    <span className="home-visit-copy"><strong>{title}</strong><small>{note}</small></span>
    <ArrowUpRight size={16} className="home-visit-arrow" />
  </Link>);
  if (centered) return <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="home-visit-panel gap-2 p-5">
      <DialogTitle className="pr-8 text-navy">Choose your visit</DialogTitle>
      <DialogDescription className="sr-only">How would you like to visit HKS Vidyamandir?</DialogDescription>
      <div>{options}</div>
    </DialogContent>
  </Dialog>;
  return <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>{children}</PopoverTrigger>
    <PopoverContent side="top" align="start" className="home-visit-panel" aria-label="Choose your visit">
      <p>How would you like to visit?</p>
      {options}
    </PopoverContent>
  </Popover>;
}

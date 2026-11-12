export const SITE = {
  name: "HKS Vidyamandir",
  short: "HKS",
  tagline: "Strengthening Your Wings of Success",
  phone: "+91 82770 78474",
  phoneHref: "tel:+918277078474",
  whatsapp: "https://wa.me/918277078474",
  email: "hksinternationalschool417@gmail.com",
  address: "NH 75, Bengaluru - Mangaluru Highway, Kenchattahalli - 573 201, Karnataka",
  mapsUrl: "https://maps.app.goo.gl/EmG9n465WQdnDxa26",
  mapsEmbed:
    "https://www.google.com/maps?q=HKS+Vidyamandir+Kenchattahalli&output=embed",
  founded: 2010,
  hours: "Mon - Sat · 8:30 AM - 4:30 PM",
};

export type NavItem = { label: string; to: string; desc?: string };

import { AnubhavIcon, KhelIcon, KrishiIcon, SamskrutiIcon } from "@/components/site/VidyaIcons";

// The school's four learning verticals, shown above the main menu.
export const VIDYA: { label: string; icon: typeof KrishiIcon; tone: string }[] = [
  { label: "Krishi Vidya", icon: KrishiIcon, tone: "text-teal" },
  { label: "Khel Vidya", icon: KhelIcon, tone: "text-gold" },
  { label: "Anubhav Vidya", icon: AnubhavIcon, tone: "text-navy" },
  { label: "Samskruti Vidya", icon: SamskrutiIcon, tone: "text-ink" },
];
export type NavGroup = { label: string; to: string; children?: NavItem[] };

export const NAV: NavGroup[] = [
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about", desc: "Legacy, vision, mission & values since 2010" },
      { label: "Leadership", to: "/leadership", desc: "Messages from the Chairman & Principal" },
      { label: "Why HKS", to: "/why-hks", desc: "What makes us the best school in Karnataka" },
    ],
  },
  {
    label: "Academics",
    to: "/academics",
    children: [
      { label: "CBSE Curriculum", to: "/academics", desc: "Nursery to Grade 12, stage by stage" },
      { label: "Experiential Learning & Labs", to: "/experiential-learning", desc: "VR, AR, robotics, STEM & science labs" },
      { label: "Competitive Exams & Olympiads", to: "/competitive-exams", desc: "NEET/JEE foundation, Olympiads, SAT & IELTS" },
    ],
  },
  {
    label: "Campus Life",
    to: "/campus-life",
    children: [
      { label: "Sports & Fitness", to: "/sports", desc: "Cricket, archery, horse riding, yoga & more" },
      { label: "Student Development", to: "/campus-life", desc: "Clubs, leadership & life skills" },
      { label: "Residential Programme", to: "/boarding", desc: "Full & weekday boarding on campus" },
      { label: "Campus & Gallery", to: "/campus", desc: "Explore our infrastructure" },
    ],
  },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];

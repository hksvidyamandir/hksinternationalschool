import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => seo(
    "Best CBSE Residential School in Karnataka",
    "HKS Vidyamandir - CBSE day & residential school from Nursery to Grade 12. NEET/JEE foundation, modern labs, sports and boarding. Admissions open 2026-27.",
    "/",
  ),
  component: HomePage,
});

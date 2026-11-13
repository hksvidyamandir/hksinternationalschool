import early1 from "@/assets/programme-early-1.jpg";
import early2 from "@/assets/programme-early-2.jpg";
import early3 from "@/assets/programme-early-3.jpg";
import early4 from "@/assets/programme-early-4.jpg";
import early5 from "@/assets/programme-early-5.jpg";
import early6 from "@/assets/programme-early-6.jpg";
import primary1 from "@/assets/programme-primary-1.jpg";
import primary2 from "@/assets/programme-primary-2.jpg";
import primary3 from "@/assets/programme-primary-3.jpg";
import primary4 from "@/assets/programme-primary-4.jpg";
import primary5 from "@/assets/programme-primary-5.jpg";
import primary6 from "@/assets/programme-primary-6.jpg";
import high1 from "@/assets/programme-high-1.jpg";
import high2 from "@/assets/programme-high-2.jpg";
import high3 from "@/assets/programme-high-3.jpg";
import high4 from "@/assets/programme-high-4.jpg";
import high5 from "@/assets/programme-high-5.jpg";
import high6 from "@/assets/programme-high-6.jpg";
import senior1 from "@/assets/programme-senior-inclusive-1.jpg";
import senior2 from "@/assets/programme-senior-inclusive-2.jpg";
import senior3 from "@/assets/programme-senior-inclusive-3.jpg";
import senior4 from "@/assets/programme-senior-inclusive-4.jpg";
import senior5 from "@/assets/programme-senior-inclusive-5.jpg";
import senior6 from "@/assets/programme-senior-inclusive-6.jpg";

export type ProgrammePhoto = { src: string; caption: string };

export const programmePhotos = {
  early: [
    { src: early1, caption: "Building blocks and discovery" },
    { src: early2, caption: "Stories and imagination" },
    { src: early3, caption: "Art and creative play" },
    { src: early4, caption: "Counting through play" },
    { src: early5, caption: "Outdoor play and movement" },
    { src: early6, caption: "Exploring nature" },
  ],
  primary: [
    { src: primary1, caption: "Collaborative classroom learning" },
    { src: primary2, caption: "Reading and library discovery" },
    { src: primary3, caption: "Hands-on science" },
    { src: primary4, caption: "Art and creative expression" },
    { src: primary5, caption: "Sport and teamwork" },
    { src: primary6, caption: "Learning in the garden" },
  ],
  high: [
    { src: high1, caption: "Independent classroom thinking" },
    { src: high2, caption: "Science laboratory exploration" },
    { src: high3, caption: "Coding and digital learning" },
    { src: high4, caption: "Team sport and fitness" },
    { src: high5, caption: "Robotics and problem-solving" },
    { src: high6, caption: "Public speaking and confidence" },
  ],
  senior: [
    { src: senior1, caption: "Advanced science learning" },
    { src: senior2, caption: "Chemistry practical learning" },
    { src: senior3, caption: "Focused study and preparation" },
    { src: senior4, caption: "Commerce and collaboration" },
    { src: senior5, caption: "Career guidance and mentoring" },
    { src: senior6, caption: "Physics practical exploration" },
  ],
} satisfies Record<string, ProgrammePhoto[]>;

import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Prathmesh Sharma — 3rd-year CSE (AI/ML) at Indus University, self-directed builder, certifications, and timeline.",
};

export default function AboutPage() {
  return <AboutContent />;
}

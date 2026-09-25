import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Prathmesh Sharma — 3rd-year B.Tech CSE at Indus University, self-directed builder, certifications, and timeline.",
};

export default function AboutPage() {
  return <AboutContent />;
}

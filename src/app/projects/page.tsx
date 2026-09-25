import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Prathmesh Sharma — Smart Attendance Planner, Financial Sentiment Analysis, Cognition Env, AI Agent Capstone.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

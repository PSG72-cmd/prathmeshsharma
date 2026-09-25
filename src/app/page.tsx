"use client";

import { motion } from "framer-motion";
import HeroHeadline, { StatusLine } from "@/components/HeroHeadline";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SkillsMarquee from "@/components/SkillsMarquee";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import { projects, skills } from "@/lib/data";
import { EXPO_OUT } from "@/lib/motion";

export default function HomePage() {
  // Featured projects in bento order: Attendance, Financial Sentiment (large), Cognition, AI Agent (small)
  const featuredOrder = [
    "attendance-planner",
    "financial-sentiment",
    "cognition-env",
    "ai-agent-capstone",
  ];
  const featured = featuredOrder
    .map((slug) => projects.find((p) => p.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative blueprint-grid hero-vignette">
        {/* Corner brackets on section */}
        <div className="corner-brackets mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32 lg:py-40">
          <HeroHeadline text="Prathmesh Sharma" />

          <StatusLine text="AI/ML · FULL-STACK · CLOUD — B.TECH CSE, 2ND YEAR — SHIPPING SINCE 2024" />

          <motion.p
            className="mt-6 max-w-xl text-text-muted leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EXPO_OUT, delay: 0.8 }}
          >
            Builds AI-powered products end-to-end — model logic to deployed
            interface. Three shipped independently, including a React app with
            50+ real users and an AI agent on Google Gemini.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EXPO_OUT, delay: 1.0 }}
          >
            <Button href="/projects" variant="filled">
              View Projects
            </Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Work — Bento Grid ──────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <SectionReveal>
          <h2 className="font-display text-text mb-2">Featured Work</h2>
          <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mb-12">
            SELECTED PROJECTS — 2024–2025
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Skills Strip — Marquee ──────────────────────────────────── */}
      <section className="py-8">
        <SkillsMarquee />
      </section>

      {/* ─── Skills Grid — Four Quadrants ────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <SectionReveal>
          <h2 className="font-display text-text mb-2">Systems</h2>
          <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mb-12">
            CAPABILITIES BY DOMAIN
          </p>
        </SectionReveal>

        <SectionReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((category, i) => (
            <RevealItem key={category.label} index={i}>
              <div className="border border-border bg-surface p-6 md:p-8 corner-brackets">
                <h3 className="font-mono text-[12px] tracking-[0.2em] text-accent mb-4">
                  {category.label}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[12px] tracking-wider text-text-muted"
                    >
                      <span className="text-text-dim mr-2">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </section>

      {/* ─── Closing CTA ─────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <SectionReveal className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24 text-center">
          <h2 className="font-display text-text mb-4">See the full picture</h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            Problem statements, technical approaches, and results for every
            project.
          </p>
          <Button href="/projects" variant="filled">
            All Projects
          </Button>
        </SectionReveal>
      </section>
    </>
  );
}

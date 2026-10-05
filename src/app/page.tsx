"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroHeadline, { StatusLine } from "@/components/HeroHeadline";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import { projects, skills, currentlyExploring } from "@/lib/data";
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
      {/* ─── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative blueprint-grid hero-vignette">
        {/* Corner brackets on section */}
        <div className="corner-brackets mx-auto max-w-6xl px-6 md:px-8 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <HeroHeadline text="Prathmesh Sharma" />

              <StatusLine text="AI/ML · FULL-STACK · CLOUD — B.TECH CSE, 3RD YEAR — SHIPPING SINCE 2024" />

              <motion.p
                className="mt-6 max-w-xl text-text-muted leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EXPO_OUT, delay: 0.8 }}
              >
                Builds AI-powered products end-to-end — model logic to deployed
                interface. Three shipped independently, including a React app with
                50+ real users and an AI agent on Google Gemini.
              </motion.p>

              {/* CTA button hierarchy preserved: View Projects = solid fill, Get in Touch = outline */}
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

            {/* Profile Card — Clean photo and simple caption without HUD gimmicks */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.6 }}
            >
              <div className="w-full max-w-[320px] sm:max-w-[340px] border border-border bg-surface p-4 corner-brackets relative shadow-2xl">
                {/* Photo frame */}
                <div className="relative aspect-square w-full overflow-hidden border border-border bg-bg/50">
                  <Image
                    src="/prathmesh.jpg"
                    alt="Prathmesh Sharma"
                    fill
                    sizes="(max-width: 640px) 280px, 340px"
                    className="object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>

                {/* Simple caption */}
                <div className="mt-3.5 flex items-center justify-between font-mono text-[11px] tracking-wider">
                  <span className="text-text font-medium">PRATHMESH SHARMA</span>
                  <span className="text-text-dim">AHMEDABAD, IN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. Featured Work (Bento Grid) ─────────────────────────────────── */}
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

      {/* ─── 3. Systems / Capabilities ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24 border-t border-border">
        <SectionReveal>
          <h2 className="font-display text-text mb-2">Systems</h2>
          <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mb-12">
            CAPABILITIES BY DOMAIN
          </p>
        </SectionReveal>

        {/* Core production domains */}
        <SectionReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((category, i) => (
            <RevealItem key={category.label} index={i}>
              <div className="border border-border bg-surface p-6 md:p-8 corner-brackets h-full">
                <h3 className="font-mono text-[12px] tracking-[0.2em] text-accent mb-4">
                  {category.label}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="chevron-item font-mono text-[12px] tracking-wider text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>

        {/* Clearly labeled "Currently Exploring" sub-strip */}
        <SectionReveal className="mt-6">
          <div className="border border-border bg-surface/60 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase font-medium">
                CURRENTLY EXPLORING
              </span>
              <p className="text-text-dim font-mono text-[11px] mt-1">
                Active systems & robotics research
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {currentlyExploring.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] tracking-wider text-text-muted border border-border bg-bg/50 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ─── 4. Closing CTA ───────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <SectionReveal className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24 text-center">
          <h2 className="font-display text-text mb-4">See the full picture</h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto text-sm md:text-base">
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

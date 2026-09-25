"use client";

import Image from "next/image";
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

            {/* Profile Card */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.6 }}
            >
              <div className="w-full max-w-[320px] sm:max-w-[340px] border border-border bg-surface p-4 corner-brackets relative shadow-2xl">
                {/* Console header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80 font-mono text-[10px] tracking-widest text-text-dim">
                  <span>ID: PS-2024</span>
                  <span className="flex items-center gap-1.5 text-accent">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    ONLINE
                  </span>
                </div>

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
                  <div className="absolute top-2 left-2 font-mono text-[9px] text-accent/80 tracking-widest bg-bg/80 px-1 py-0.5 border border-border/60">
                    PFP.01
                  </div>
                </div>

                {/* Console footer metadata */}
                <div className="mt-3 pt-3 border-t border-border/80 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-text font-medium tracking-wider">PRATHMESH SHARMA</span>
                  <span className="text-text-dim">AHMEDABAD, IN</span>
                </div>
              </div>
            </motion.div>
          </div>
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

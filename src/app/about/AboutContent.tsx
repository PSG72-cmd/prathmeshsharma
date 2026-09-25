"use client";

import Image from "next/image";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import { timeline, certifications, languages } from "@/lib/data";

export default function AboutContent() {
  return (
    <>
      {/* Header */}
      <section className="blueprint-grid border-b border-border">
        <div className="corner-brackets mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <SectionReveal>
            <h1 className="font-display text-text">About</h1>
            <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mt-4">
              BACKGROUND · TIMELINE · CREDENTIALS
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Narrative ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <SectionReveal stagger className="lg:col-span-7">
            <RevealItem index={0}>
              <div>
                <h2 className="font-display text-text mb-6">
                  Building, not waiting
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  2nd-year B.Tech CSE (AI/ML) at Indus University (2024–2028).
                  Instead of waiting for a formal internship to start doing real
                  work, I started shipping products from year one — solving actual
                  problems for actual users.
                </p>
                <p className="text-text-muted leading-relaxed mb-4">
                  Three independently shipped products so far: a PWA used by 50+
                  students daily for attendance planning, an RL-driven IT support
                  agent built at a hackathon, and a financial sentiment ML pipeline
                  deployed as a full-stack app with candlestick charting.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Every project starts from a real problem and ends with something
                  deployed — not a notebook, not a demo, a live product with real
                  users or a submitted deliverable.
                </p>
              </div>
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px] border border-border bg-surface p-4 corner-brackets relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border font-mono text-[10px] text-text-dim">
                <span>SPEC // BIO-DATA</span>
                <span className="text-accent">VERIFIED</span>
              </div>

              <div className="relative aspect-square w-full overflow-hidden border border-border bg-bg/50">
                <Image
                  src="/prathmesh.jpg"
                  alt="Prathmesh Sharma"
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="mt-4 space-y-2 font-mono text-[11px]">
                <div className="flex justify-between border-b border-border/50 pb-1.5">
                  <span className="text-text-dim">NAME</span>
                  <span className="text-text">Prathmesh Sharma</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-1.5">
                  <span className="text-text-dim">EDUCATION</span>
                  <span className="text-text">B.Tech CSE (AI/ML)</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-1.5">
                  <span className="text-text-dim">INSTITUTION</span>
                  <span className="text-text">Indus University (&apos;28)</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-1.5">
                  <span className="text-text-dim">BASE</span>
                  <span className="text-text">Ahmedabad, India</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-text-dim">STATUS</span>
                  <span className="text-accent">Available for roles</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Timeline ───────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <SectionReveal>
            <h2 className="font-display text-text mb-2">Build Timeline</h2>
            <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mb-12">
              CHRONOLOGICAL · BY COMPLEXITY
            </p>
          </SectionReveal>

          <div className="relative">
            {/* Schematic connector line */}
            <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-border" />

            <SectionReveal stagger className="space-y-12">
              {timeline.map((entry, i) => (
                <RevealItem key={i} index={i}>
                  <div className="relative pl-8 md:pl-12">
                    {/* Dot on the line */}
                    <div className="absolute left-0 md:left-1 top-1 w-[15px] h-[15px] border border-border bg-bg flex items-center justify-center">
                      <div className="w-[5px] h-[5px] bg-accent" />
                    </div>

                    <div className="font-mono text-[11px] tracking-[0.15em] text-text-dim mb-2">
                      {entry.date}
                    </div>
                    <h3 className="font-display text-text text-lg mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed max-w-lg">
                      {entry.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ─── Certifications ─────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <SectionReveal>
            <h2 className="font-display text-text mb-2">Certifications</h2>
            <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mb-8">
              VERIFIED CREDENTIALS
            </p>
          </SectionReveal>

          <SectionReveal stagger className="space-y-4">
            {certifications.map((cert, i) => (
              <RevealItem key={i} index={i}>
                <div className="flex items-baseline gap-3 border border-border bg-surface px-6 py-4">
                  <span className="font-mono text-[11px] tracking-wider text-accent shrink-0">
                    {cert.provider.toUpperCase()}
                  </span>
                  <span className="text-text-dim font-mono text-[11px]">
                    —
                  </span>
                  <span className="text-text-muted text-sm">
                    {cert.title}
                  </span>
                </div>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ─── Personal ──────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <SectionReveal stagger>
            <RevealItem index={0}>
              <div className="max-w-2xl mb-8">
                <h2 className="font-display text-text mb-6">
                  Outside the editor
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Basketball (college team) and chess aren't just hobbies — they
                  shape how I think about problems. Basketball is about systems:
                  positioning, reading the play two moves ahead, executing under
                  pressure with a team. Chess is pure pattern recognition and
                  long-range planning. Both feed directly into how I approach
                  architecture and debugging — finding the structure in
                  complexity.
                </p>
              </div>
            </RevealItem>

            <RevealItem index={1}>
              <div>
                <span className="font-mono text-[11px] tracking-[0.15em] text-text-dim block mb-3">
                  LANGUAGES
                </span>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="font-mono text-[11px] tracking-wider text-text-muted border border-border px-3 py-1.5"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

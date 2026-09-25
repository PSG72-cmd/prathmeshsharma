"use client";

import { projects } from "@/lib/data";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import Button from "@/components/Button";

export default function ProjectsContent() {
  return (
    <>
      {/* Header */}
      <section className="blueprint-grid border-b border-border">
        <div className="corner-brackets mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <SectionReveal>
            <h1 className="font-display text-text">Projects</h1>
            <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mt-4">
              PROBLEM &rarr; APPROACH &rarr; RESULT &rarr; STACK
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Project Sections */}
      {projects.map((project, projectIndex) => (
        <section
          key={project.slug}
          id={project.slug}
          className="border-b border-border scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
            <SectionReveal stagger>
              {/* Project header */}
              <RevealItem index={0}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-display text-text">{project.name}</h2>
                    <p className="text-text-muted mt-2 max-w-xl">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex gap-6 shrink-0">
                    {project.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="font-mono text-[11px] tracking-wider text-left md:text-right"
                      >
                        <div className="text-text-dim">{stat.label}</div>
                        <div className="text-accent text-lg font-medium mt-1">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>

              {/* Description */}
              <RevealItem index={1}>
                <div className="border border-border bg-surface p-6 md:p-8 mb-8">
                  <ul className="space-y-4">
                    {project.description.map((paragraph, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-mono text-accent text-[11px] mt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-text-muted leading-relaxed">
                          {paragraph}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>

              {/* Stack */}
              <RevealItem index={2}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-text-dim mr-2">
                    STACK
                  </span>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider text-text-muted border border-border px-3 py-1.5"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>
              </RevealItem>

              {/* Action links */}
              {(project.liveUrl || project.repoUrl) && (
                <RevealItem index={3}>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} variant="filled" external>
                        View Live &rarr;
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button href={project.repoUrl} variant="outline" external>
                        GitHub Repo &rarr;
                      </Button>
                    )}
                  </div>
                </RevealItem>
              )}
            </SectionReveal>
          </div>
        </section>
      ))}
    </>
  );
}

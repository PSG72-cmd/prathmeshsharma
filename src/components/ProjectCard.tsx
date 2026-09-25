"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Reduced motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Mouse position relative to card center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-based magnetic offset
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const translateX = useSpring(0, springConfig);
  const translateY = useSpring(0, springConfig);

  // 3D tilt based on mouse position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchDevice || reducedMotion) return;
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
      translateX.set(x * 6);
      translateY.set(y * 6);
    },
    [isTouchDevice, reducedMotion, mouseX, mouseY, translateX, translateY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    translateX.set(0);
    translateY.set(0);
  }, [mouseX, mouseY, translateX, translateY]);

  const disableEffects = isTouchDevice || reducedMotion;

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <Link href={`/projects#${project.slug}`} className="block">
        <motion.div
          className="relative overflow-hidden border border-border bg-surface p-6 md:p-8 h-full min-h-[240px] cursor-pointer"
          style={
            disableEffects
              ? {}
              : {
                  x: translateX,
                  y: translateY,
                  rotateX: springRotateX,
                  rotateY: springRotateY,
                  transformPerspective: 800,
                }
          }
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Content always visible */}
          <div className="relative z-10">
            <h3 className="font-display text-text mb-2 leading-tight">
              {project.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-md">
              {project.tagline}
            </p>

            {/* Stats — always visible */}
            <div className="flex gap-6 mb-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="font-mono text-[11px] tracking-wider">
                  <span className="text-text-dim">{stat.label}</span>
                  <span className="ml-2 text-accent">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-wider text-text-dim border border-border px-2 py-1"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Slide-up detail panel on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-surface border-t border-border px-6 py-4 md:px-8 z-20"
            initial={{ y: "100%" }}
            animate={{ y: isHovered && !disableEffects ? "0%" : "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Accent top hairline */}
            <div className="absolute top-0 left-0 right-0 h-px bg-accent" />

            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-wider text-text-muted">
                {project.stats.length > 1 ? (
                  <>
                    <span className="text-text-dim">
                      {project.stats[1].label}
                    </span>
                    <span className="ml-2 text-accent">
                      {project.stats[1].value}
                    </span>
                  </>
                ) : (
                  <span className="text-accent">VIEW DETAILS</span>
                )}
              </span>
              <span className="font-mono text-[11px] tracking-wider text-accent">
                &rarr;
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

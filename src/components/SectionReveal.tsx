"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { scrollReveal, staggerContainer } from "@/lib/motion";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function SectionReveal({
  children,
  className = "",
  stagger = false,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={scrollReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// Individual child item for use inside a stagger container
export function RevealItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div className={className} variants={scrollReveal} custom={index}>
      {children}
    </motion.div>
  );
}

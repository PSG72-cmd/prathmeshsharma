"use client";

import { motion } from "framer-motion";
import { heroCharacter, EXPO_OUT } from "@/lib/motion";

interface HeroHeadlineProps {
  text: string;
}

export default function HeroHeadline({ text }: HeroHeadlineProps) {
  const words = text.split(" ");

  return (
    <h1 className="font-display text-text leading-[1.05]" style={{ perspective: "600px" }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const globalIndex = words
              .slice(0, wordIndex)
              .reduce((sum, w) => sum + w.length, 0) + charIndex;
            return (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                variants={heroCharacter}
                initial="hidden"
                animate="visible"
                custom={globalIndex}
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

// Status readout sub-line
export function StatusLine({ text }: { text: string }) {
  return (
    <motion.p
      className="font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase text-text-dim mt-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EXPO_OUT, delay: 0.6 }}
    >
      {text}
    </motion.p>
  );
}

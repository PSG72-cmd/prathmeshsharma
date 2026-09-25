"use client";

import { motion } from "framer-motion";
import { EXPO_OUT } from "@/lib/motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant: "filled" | "outline";
  children: React.ReactNode;
  external?: boolean;
}

export default function Button({
  href,
  variant,
  children,
  external = false,
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center font-mono text-[11px] tracking-[0.15em] uppercase px-6 py-3 border transition-all duration-200 cursor-pointer";

  const variantClasses =
    variant === "filled"
      ? "bg-accent text-bg border-accent hover:border-text hover:translate-y-[-4px]"
      : "bg-transparent text-text-muted border-border hover:border-accent hover:text-accent hover:translate-y-[-4px]";

  const className = `${baseClasses} ${variantClasses}`;

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        whileTap={{ scale: 0.98, y: 1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

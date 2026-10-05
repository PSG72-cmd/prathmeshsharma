"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm transition-colors duration-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-8">
        {/* Typographic Logo Mark (no avatar) */}
        <Link
          href="/"
          className="flex items-center min-h-[44px] py-1 font-mono text-sm tracking-widest text-text font-bold hover:text-accent transition-colors duration-200"
          aria-label="Home"
        >
          PS_
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      relative flex items-center min-h-[44px] py-2 font-mono text-[11px] tracking-[0.15em] transition-colors duration-200
                      ${isActive ? "text-accent" : "text-text-dim hover:text-text-muted"}
                    `}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1.5 left-0 right-0 h-px bg-accent"
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right actions: Resume link + Theme toggle */}
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-text-dim hover:text-accent border border-border bg-surface/60 hover:border-accent transition-colors duration-200"
            >
              <span>RESUME</span>
              <span aria-hidden="true">&nearr;</span>
            </a>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-2 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-px w-5 bg-text-muted transition-transform duration-200 ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-muted my-1 transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-muted transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-b border-border bg-surface shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        flex items-center min-h-[44px] font-mono text-[12px] tracking-[0.15em] py-2
                        ${isActive ? "text-accent" : "text-text-dim hover:text-text-muted"}
                      `}
                    >
                      {isActive && (
                        <span aria-hidden="true" className="mr-2 text-accent">
                          &gt;
                        </span>
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="pt-2 mt-2 border-t border-border">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between min-h-[44px] font-mono text-[12px] tracking-[0.15em] text-text-dim hover:text-accent py-2"
                >
                  <span>RESUME</span>
                  <span aria-hidden="true">&nearr;</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

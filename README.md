# Prathmesh Sharma — Portfolio

Personal portfolio website built with the **Blueprint Console** design system — dark, structured, schematic.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (fully custom theme — no default palette)
- **Framer Motion** for animation/gesture work
- **next/font** for font loading (Fraunces, Schibsted Grotesk, IBM Plex Mono)


## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, nav, footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system + custom properties
│   ├── projects/
│   │   ├── page.tsx        # Projects page
│   │   └── ProjectsContent.tsx
│   ├── about/
│   │   ├── page.tsx        # About page
│   │   └── AboutContent.tsx
│   └── contact/
│       ├── page.tsx        # Contact page
│       └── ContactContent.tsx
├── components/
│   ├── Nav.tsx             # Fixed navigation
│   ├── Footer.tsx          # Footer with links
│   ├── Button.tsx          # CTA button (filled/outline)
│   ├── HeroHeadline.tsx    # Character-stagger headline
│   ├── ProjectCard.tsx     # Bento card with tilt + magnetic hover
│   ├── SectionReveal.tsx   # Scroll-reveal wrapper
│   ├── SkillsMarquee.tsx   # Continuous horizontal marquee
│   └── PageTransition.tsx  # AnimatePresence page wrapper
└── lib/
    ├── data.ts             # All content (projects, skills, certifications, etc.)
    └── motion.ts           # Shared animation config
```

## Editing Content

All portfolio content is in `src/lib/data.ts`. Adding a new project, skill, or link is a single-file change.

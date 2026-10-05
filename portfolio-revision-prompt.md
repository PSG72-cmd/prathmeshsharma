# Portfolio Site — Revision Pass

This is a fix/refinement pass on the existing site (not a rebuild). Work through each section. Where a fix conflicts with something already correct, leave it — specifically: the Hero's two CTA buttons already have correct hierarchy (View Projects = solid fill, Get in Touch = outline). Don't touch that.

## P0 — Bugs

1. **Contact form doesn't send for anyone but the owner.** Diagnose and fix properly — this needs an actual backend, not just a client-side form:
   - Add a Next.js API route (`/api/contact` or similar) that receives the form POST.
   - Send the message via a real email service (Resend is the natural fit for Next.js + Vercel — free tier is enough here). Store the API key in a Vercel environment variable, never in client code or committed to the repo.
   - Validate all fields server-side (non-empty, valid email format, reasonable length caps) — don't rely on HTML `required` alone.
   - Add a honeypot field (hidden input real users won't fill, bots will) to cut spam without a visible CAPTCHA.
   - Return a real success/error state to the form and show it to the user — right now it silently fails, which is its own bug independent of the backend being missing.
   - After this works, verify it by actually submitting the form as a fresh/incognito session, not just locally as the owner.

2. **Thin yellow-green line at the top edge of the page** (seen across Home/About/Contact in screenshots). Confirm whether this renders on the live site itself (check in a clean browser tab, no extensions/recording overlay) or was a capture artifact. If real, find and remove the stray border/overflow/decorative element causing it.

3. **Scroll-reveal text on project card titles** looked blurred/doubled mid-animation in screenshots. Confirm it settles to fully crisp text at rest and doesn't linger in a transitional state.

## P1 — New feature: light/dark theme toggle

- Use `next-themes` with Tailwind's class-based dark mode (`darkMode: 'class'`) rather than hand-rolling theme state.
- Define a light-mode token set alongside the existing dark palette (don't just invert — design it): warm off-white background (e.g. `#F5F3EF`, keeping the "drafting paper" feel rather than stark white), dark ink text (`#14171B`), borders/grid lines a soft muted grey (`#D8DBDD`), and the accent adjusted for contrast if needed (a slightly deeper orange, e.g. `#D35400`, since the current `#FF7A30` may be too light against a pale background). Grid/blueprint background pattern stays, just inverted in opacity.
- Toggle placement: in the nav, where the Resume link is being added (see below).
- Interaction reference — the toggle mechanic you provided (checkbox-driven slider, track + thumb) is fine to keep structurally, but adapt it rather than drop it in verbatim:
  - Replace the two base64 JPEG sun/moon icons (they're low-res and pixelated) with inline SVG sun/moon icons, sized to fit the thumb, colored via `currentColor` so they pick up the theme's text color.
  - Replace the hardcoded `#ccc` track color with the site's `--border` token; the thumb uses `--surface` with a `1px --border` outline, not a filled color — keep it flat and quiet, consistent with the rest of the UI, not a colorful toggle switch competing for attention.
  - Reimplement the slide as a Framer Motion `layout` or `animate` transform rather than a raw CSS transition, to match the rest of the site's motion system.
  - Respect `prefers-color-scheme` as the default on first load, then persist the user's explicit choice (standard `next-themes` behavior).

## P2 — Structural / content changes

4. **Reorder Home sections:** Hero → Featured Work → Systems/Capabilities → closing CTA. Projects should be the first thing a visitor scrolls to after the hero, not the skills list — let the work speak before the keyword list does.

5. **Remove the HUD-style elements** on the hero's profile card and the About page bio card: `ID: PS-2024`, the `ONLINE` status dot, `PFP.01`, and the `VERIFIED` tag. Replace with just the photo and a simple caption (name, location) — no badge/label styling around it. The ID-card framing was a reasonable idea on paper but in practice it reads as exactly the kind of decorative gimmick the rest of the site is trying to avoid.

6. **Remove the skills marquee/ticker entirely.** It duplicates the four-quadrant Systems grid directly above it with no new information — redundant motion, not meaningful motion.

7. **Footer:** remove "BUILT WITH NEXT.JS · DEPLOYED ON VERCEL" from the footer on every page.

8. **Project cards (Home bento grid):** stop making the entire card a single link to `/projects#slug`. Instead:
   - Card title overlay-links to the project's section on `/projects` (via a `position: relative` card + `::after` full-card overlay pattern, so the click target stays large without nested-anchor issues).
   - Add explicit, separately-clickable buttons on the card for `Live Demo ↗` (where a live URL exists) and `GitHub Repo ↗` — real external links, not just a jump to `/projects`.
   - Give the trailing arrow icon a real accessible label (`aria-label="Read case study for Smart Attendance Planner"`) instead of a bare unlabeled `→`.

9. **Nav:** drop the small avatar next to `PS_` in the header — it's redundant with the large portrait in the hero just below it. Keep `PS_` as a plain typographic wordmark. Add a `Resume ↗` link/button in the nav, top right, where recruiters expect it.

10. **Separate in-progress skills.** Pull `ROS2`, `Robotics`, `C` out of the main Systems grid into a clearly labeled "Currently Exploring" sub-strip, so the core production-ready stack (AI/ML, Full-Stack, Cloud) reads as the primary claim and the in-progress systems work doesn't dilute it.

## P3 — Accessibility fixes

11. **Hero heading:** the name is currently split into one `<span>` per character for the stagger animation, which causes screen readers to spell the name letter by letter. Fix: wrap the animated spans in a container with `aria-hidden="true"`, and put the real name as plain text via `aria-label="Prathmesh Sharma"` on the parent `<h1>`.

12. **Skills list chevrons:** currently hardcoded `>` text characters inside each list item, also read aloud by screen readers as "greater than." Move to a CSS `::before` pseudo-element (`content: ">"` with `aria-hidden` implied by pseudo-elements) or swap for a small SVG indicator.

13. **Add a skip-to-content link** (`<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>`) as the first focusable element, before the nav.

14. **Audit contrast** on muted/secondary text (section eyebrows like "CAPABILITIES BY DOMAIN", "SELECTED PROJECTS — 2024–2025") against the background — confirm it meets WCAG AA (4.5:1 for body text, 3:1 for large text). Adjust the token if it's falling short; don't assume the spec'd hex value survived implementation unchanged.

15. **Touch targets:** footer links (EMAIL/GITHUB/LINKEDIN) and nav items need a minimum 44×44px tappable area on mobile, even if the visible text is smaller — pad the clickable area, not just the text.

## P4 — Pre-launch security checklist (scoped to what this app actually has)

This site has no database, no user accounts, and no login — so most generic "pre-launch security" checklists (RLS, password hashing, session cookies, parameterized queries) don't apply. What's actually relevant here, now that there's a real backend endpoint:

- **Hide API keys:** Resend (or whichever email service) API key lives only in a Vercel environment variable, never in client-side code or committed to git.
- **Purge git secrets:** check git history for anything accidentally committed (API keys, `.env` files) before making the repo public; scrub with `git filter-repo` or BFG if anything's there.
- **Validate all input / escape user content:** sanitize the contact form's name/email/message server-side before including it in the outgoing email (prevent header injection, HTML injection in the email body).
- **Rate limit + bot protection:** basic rate limiting on `/api/contact` (even a simple in-memory or Vercel KV-based limiter) plus the honeypot field from P0.
- **Trim API responses:** the contact API route should return a generic success/error, not leak stack traces or internal error details to the client.
- **Add security headers + force HTTPS:** Vercel handles HTTPS automatically; add standard headers (`X-Content-Type-Options`, `X-Frame-Options`, a basic `Content-Security-Policy`) via `next.config.js`.
- **Scan dependencies:** run `npm audit` before launch, and enable Dependabot (or Vercel's equivalent) on the GitHub repo going forward.

## Final check

After all of the above, go back through the original "Hard rules" table from the first build spec and re-verify nothing in this revision pass reintroduced a banned pattern (badges, glow, gradients, etc.) while fixing something else.

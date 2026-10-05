import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Links with >= 44x44px touch targets */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 -ml-3">
            {socialLinks
              .filter((l) => l.type !== "resume")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.type === "email" ? undefined : "_blank"}
                  rel={link.type === "email" ? undefined : "noopener noreferrer"}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center px-3 font-mono text-[11px] tracking-[0.15em] text-text-dim hover:text-accent transition-colors duration-200"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
          </div>

          {/* Clean minimal imprint */}
          <p className="font-mono text-[11px] tracking-[0.1em] text-text-dim">
            PRATHMESH SHARMA
          </p>
        </div>
      </div>
    </footer>
  );
}

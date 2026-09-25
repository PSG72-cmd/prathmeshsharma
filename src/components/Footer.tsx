import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Links */}
          <div className="flex items-center gap-6">
            {socialLinks
              .filter((l) => l.type !== "resume")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.type === "email" ? undefined : "_blank"}
                  rel={link.type === "email" ? undefined : "noopener noreferrer"}
                  className="font-mono text-[11px] tracking-[0.1em] text-text-dim hover:text-accent transition-colors duration-200"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
          </div>

          {/* Credit */}
          <p className="font-mono text-[10px] tracking-[0.1em] text-text-dim">
            BUILT WITH NEXT.JS · DEPLOYED ON VERCEL
          </p>
        </div>
      </div>
    </footer>
  );
}

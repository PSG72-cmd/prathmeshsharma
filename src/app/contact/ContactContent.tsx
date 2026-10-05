"use client";

import { useState, FormEvent } from "react";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import { socialLinks } from "@/lib/data";

export default function ContactContent() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot field
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setFormState("sent");
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        setFormState("error");
        setErrorMessage(data.error || "Something went wrong. Try emailing directly instead.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Try emailing directly instead.");
    }
  };

  return (
    <>
      {/* Header — calm, minimal */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <SectionReveal>
            <h1 className="font-display text-text">Contact</h1>
            <p className="font-mono text-[11px] tracking-[0.15em] text-text-dim mt-4">
              LET&apos;S CONNECT
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* ─── Left: Links ───────────────────────────────────────────── */}
          <SectionReveal stagger>
            <RevealItem index={0}>
              <h2 className="font-display text-text text-xl mb-8">
                Direct channels
              </h2>
            </RevealItem>

            <div className="space-y-6">
              {socialLinks.map((link, i) => (
                <RevealItem key={link.label} index={i + 1}>
                  <a
                    href={link.url}
                    target={link.type === "email" ? undefined : "_blank"}
                    rel={link.type === "email" ? undefined : "noopener noreferrer"}
                    download={link.type === "resume" ? "Prathmesh_Sharma_Resume.pdf" : undefined}
                    className="group flex items-center gap-4 border border-border bg-surface px-6 py-4 transition-colors duration-200 hover:border-accent"
                  >
                    <span className="font-mono text-[11px] tracking-[0.15em] text-text-dim group-hover:text-accent transition-colors duration-200">
                      {link.label.toUpperCase()}
                    </span>
                    <span className="ml-auto font-mono text-[11px] text-text-muted group-hover:text-accent transition-colors duration-200">
                      {link.type === "email"
                        ? "prathmeshsharma72@gmail.com"
                        : link.type === "github"
                          ? "PSG72-cmd"
                          : link.type === "linkedin"
                            ? "prathmesh-sharma-95ab39253"
                            : "Download PDF"}
                    </span>
                    <span className="font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      &rarr;
                    </span>
                  </a>
                </RevealItem>
              ))}
            </div>
          </SectionReveal>

          {/* ─── Right: Contact Form ───────────────────────────────────── */}
          <SectionReveal stagger>
            <RevealItem index={0}>
              <h2 className="font-display text-text text-xl mb-8">
                Send a message
              </h2>
            </RevealItem>

            <RevealItem index={1}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - invisible to humans, catches spam bots */}
                <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] tracking-[0.15em] text-text-dim mb-2"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-surface border border-border px-4 py-3 text-text-muted text-sm font-body placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] tracking-[0.15em] text-text-dim mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-surface border border-border px-4 py-3 text-text-muted text-sm font-body placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[11px] tracking-[0.15em] text-text-dim mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    maxLength={5000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-surface border border-border px-4 py-3 text-text-muted text-sm font-body placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="inline-flex items-center font-mono text-[11px] tracking-[0.15em] uppercase px-6 py-3 bg-accent text-bg border border-accent hover:border-text hover:translate-y-[-4px] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "sending"
                    ? "SENDING..."
                    : formState === "sent"
                      ? "SENT"
                      : "SEND MESSAGE"}
                </button>

                {formState === "sent" && (
                  <p className="font-mono text-[11px] text-accent mt-2">
                    Message sent. I&apos;ll get back to you soon.
                  </p>
                )}

                {formState === "error" && (
                  <p className="font-mono text-[11px] text-red-400 mt-2">
                    {errorMessage || "Something went wrong. Try emailing directly instead."}
                  </p>
                )}
              </form>
            </RevealItem>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

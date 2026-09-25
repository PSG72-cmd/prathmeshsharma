import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prathmesh Sharma — AI/ML & Full-Stack Developer",
    template: "%s — Prathmesh Sharma",
  },
  description:
    "3rd-year B.Tech CSE (AI/ML) student who builds AI-powered products end-to-end. Three shipped independently, including a React app with 50+ real users.",
  keywords: [
    "Prathmesh Sharma",
    "AI/ML developer",
    "full-stack developer",
    "portfolio",
    "B.Tech CSE",
    "React",
    "Python",
    "machine learning",
  ],
  authors: [{ name: "Prathmesh Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prathmeshsharma.vercel.app",
    title: "Prathmesh Sharma — AI/ML & Full-Stack Developer",
    description:
      "Builds AI-powered products end-to-end — model logic to deployed interface. Three shipped independently.",
    siteName: "Prathmesh Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathmesh Sharma — AI/ML & Full-Stack Developer",
    description:
      "Builds AI-powered products end-to-end — model logic to deployed interface.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${schibstedGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

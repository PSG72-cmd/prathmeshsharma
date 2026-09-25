import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Prathmesh Sharma — email, LinkedIn, GitHub, or send a message directly.",
};

export default function ContactPage() {
  return <ContactContent />;
}

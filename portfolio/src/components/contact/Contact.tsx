import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { SOCIAL_LINKS } from "@/constants/nav";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Quote } from "@/components/ui/Quote";
import { Button } from "@/components/ui/Button";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const inputStyles =
  "w-full bg-transparent border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/60 focus:border-[var(--color-accent)] outline-none transition-colors";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      // honeypot field, hidden from real users via CSS below
      honeypot: formData.get("company"),
    };

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <SectionContainer id="contact">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <SectionTitle index={9} eyebrow="Contact" title="Let's talk." align="left" />
          <Quote>Every great collaboration starts with a conversation.</Quote>

          <div className="flex items-center gap-5 mt-10">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.email} aria-label="Email" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
              <Mail size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center border border-[var(--color-border)] rounded-2xl p-12">
              <p className="editorial-quote text-2xl mb-2">Message sent.</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot — hidden from real users, catches simple bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" name="name" required placeholder="Name" className={inputStyles} />
                <input type="email" name="email" required placeholder="Email" className={inputStyles} />
              </div>
              <input type="text" name="subject" required placeholder="Subject" className={inputStyles} />
              <textarea
                name="message"
                required
                rows={5}
                minLength={10}
                placeholder="Message"
                className={`${inputStyles} resize-none`}
              />

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <Button as="button" type="submit" variant="primary" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    Sending
                    <Loader2 size={14} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionContainer>
  );
}

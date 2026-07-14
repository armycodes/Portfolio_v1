import { SOCIAL_LINKS } from "@/constants/nav";
import { KineticBanner } from "@/components/system/KineticBanner";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <KineticBanner text="LET'S BUILD" direction="left" className="border-b border-[var(--color-border)]" />

      <div className="container-page py-14 md:py-16 grid gap-10 md:grid-cols-3">
        <div className="text-mono-label text-xs text-[var(--color-text-secondary)] leading-relaxed">
          <p className="text-[var(--color-text-primary)]">SIRI MAHALAXMI</p>
          <p>Software Engineer &amp; Writer</p>
          <p>India</p>
        </div>

        <p className="editorial-quote text-lg text-[var(--color-text-secondary)] md:text-center">
          Designed with intention. Built with curiosity.
        </p>

        <div className="flex flex-col md:items-end gap-3 text-sm text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
              GitHub
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
              LinkedIn
            </a>
            <a href={SOCIAL_LINKS.email} className="hover:text-[var(--color-accent)] transition-colors">
              Email
            </a>
          </div>
          <span className="text-[var(--color-text-secondary)]/50 text-xs">
            &copy; {new Date().getFullYear()} Siri Mahalaxmi. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

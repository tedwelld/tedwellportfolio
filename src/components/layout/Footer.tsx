import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

const footerLinks = [
  { label: "About",      href: "#about" },
  { label: "Expertise",  href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "CV",         href: "#cv" },
  { label: "Services",   href: "#services" },
  { label: "Credentials", href: "#certifications" },
  { label: "Education",  href: "#education" },
  { label: "References", href: "#references" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t transition-colors duration-400"
      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
    >
      <div className="container-tdz py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 mb-3 group w-fit">
              <Image
                src="/tdz-logo.png"
                alt="TDZ"
                width={44}
                height={44}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
              >
                TDZ<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </a>
            <p className="text-sm" style={{ color: "var(--fg-50)" }}>
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-start">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--fg-50)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--fg-30)" }}
        >
          <p>© {new Date().getFullYear()} Tedwell Dumezweni Zwane — All Rights Reserved</p>
          <p>Powered by Tedwell</p>
        </div>
      </div>
    </footer>
  );
}

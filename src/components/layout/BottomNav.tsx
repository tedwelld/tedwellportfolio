"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const items = [
  { label: "Home",     href: "#home",     icon: "pi-home",     section: "home" },
  { label: "About",    href: "#about",    icon: "pi-user",     section: "about" },
  { label: "Projects", href: "#projects", icon: "pi-th-large", section: "projects" },
  { label: "CV",       href: "#cv",       icon: "pi-download", section: "cv" },
  { label: "Contact",  href: "#contact",  icon: "pi-envelope", section: "contact" },
];

export default function BottomNav() {
  const active = useActiveSection(items.map((i) => i.section));

  return (
    <nav
      className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16"
      style={{
        background: "color-mix(in srgb, var(--bg) 92%, transparent)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderTop: "1px solid var(--border)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.2)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
      aria-label="Mobile navigation"
    >
      {items.map((item) => {
        const isActive = active === item.section;
        return (
          <a
            key={item.href}
            href={item.href}
            className="flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-200 relative"
            style={{ color: isActive ? "var(--accent)" : "var(--fg-40)" }}
            aria-label={item.label}
          >
            {isActive && (
              <span
                className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            )}
            <i className={`pi ${item.icon} text-xl leading-none`} />
            <span className="text-[0.6rem] font-medium tracking-wide">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

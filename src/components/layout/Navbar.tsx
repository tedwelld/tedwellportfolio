"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useSiteTheme } from "@/contexts/NavbarThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Expertise",  href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "CV",         href: "#cv" },
  { label: "Services",   href: "#services" },
  { label: "References", href: "#references" },
  { label: "Contact",    href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const isScrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { theme } = useSiteTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || menuOpen
            ? "bg-[var(--bg)]/95 backdrop-blur-sm shadow-[0_1px_0_var(--border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-tdz flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image
              src="/tdz-logo.png"
              alt="TDZ Logo"
              width={38}
              height={38}
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span
              className="text-base font-bold tracking-wide transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
            >
              TDZ
              <span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[0.8rem] tracking-[0.1em] uppercase pb-0.5 group transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--fg-55)] hover:text-[var(--fg)]"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[var(--fg)] transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--fg)] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--fg)] transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-center items-center gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`text-2xl transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-[var(--accent)]"
                    : "text-[var(--fg)] hover:text-[var(--accent)]"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

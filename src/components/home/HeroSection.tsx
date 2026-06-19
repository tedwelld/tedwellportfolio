"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { heroContent } from "@/data/about";

export default function HeroSection() {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  /* Typewriter effect */
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function step() {
      const el = typewriterRef.current;
      if (!el) return;
      const word = heroContent.roles[ri];
      el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
      if (!deleting && ci > word.length) { deleting = true; timer = setTimeout(step, 1600); return; }
      if (deleting && ci < 0) { deleting = false; ri = (ri + 1) % heroContent.roles.length; ci = 0; }
      timer = setTimeout(step, deleting ? 55 : 90);
    }
    step();
    return () => clearTimeout(timer);
  }, []);

  /* GSAP floating pills */
  useEffect(() => {
    if (!pillsRef.current) return;
    const pills = pillsRef.current.querySelectorAll(".h-pill");
    pills.forEach((pill, i) => {
      gsap.to(pill, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-10, 10),
        opacity: gsap.utils.random(0.5, 0.8),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "80px" }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "440px",
            height: "440px",
            top: "-80px",
            left: "-100px",
            background: "radial-gradient(circle, rgba(196,180,154,0.18), transparent 70%)",
            filter: "blur(80px)",
            animation: "float-orb 22s linear infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "320px",
            height: "320px",
            bottom: "10%",
            right: "-60px",
            background: "radial-gradient(circle, rgba(196,180,154,0.12), transparent 70%)",
            filter: "blur(80px)",
            animation: "float-orb 28s linear infinite",
            animationDelay: "-8s",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "200px",
            height: "200px",
            top: "50%",
            left: "58%",
            background: "radial-gradient(circle, rgba(196,180,154,0.08), transparent 70%)",
            filter: "blur(60px)",
            animation: "float-orb 18s linear infinite",
            animationDelay: "-5s",
          }}
        />
      </div>

      {/* Floating tech pills */}
      <div
        ref={pillsRef}
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      >
        {heroContent.floatingPills.map((pill, i) => (
          <span
            key={pill}
            className="h-pill absolute text-[0.72rem] font-semibold px-3.5 py-1.5 rounded-full"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-bd)",
              color: "var(--pill-c)",
              top: `${[18, 32, 68, 78, 12, 45][i] ?? 50}%`,
              left: i % 2 === 0 ? `${[7, 10][Math.floor(i / 2)]}%` : undefined,
              right: i % 2 === 1 ? `${[8, 12, 22][Math.floor(i / 2)]}%` : undefined,
              opacity: 0.4,
            }}
          >
            {pill}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center text-center gap-8 px-6">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              border: "4px solid var(--accent)",
              boxShadow: "0 0 0 8px rgba(196,180,154,0.15), var(--shadow)",
              background: "var(--bg-card)",
            }}
          >
            <Image
              src="/tedwell-profile.jpg"
              alt="Tedwell D Zwane portrait"
              width={192}
              height={192}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <span
            className="text-xs font-medium tracking-[0.14em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            {heroContent.greeting}
          </span>

          <h1
            className="font-display font-bold text-[clamp(2.2rem,5.5vw,4rem)] leading-none"
            style={{ color: "var(--fg)" }}
          >
            {siteConfig.name}
          </h1>

          <div
            className="flex items-center justify-center gap-1.5 min-h-8 text-[clamp(1rem,2.5vw,1.3rem)]"
            style={{ color: "var(--fg-55)" }}
          >
            <span ref={typewriterRef} style={{ color: "var(--accent)", fontWeight: 600 }} />
            <span style={{ color: "var(--accent)", animation: "blink 0.9s step-end infinite" }}>|</span>
          </div>

          <p
            className="max-w-[560px] text-[0.95rem] leading-[1.75]"
            style={{ color: "var(--fg-50)" }}
          >
            {heroContent.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-3.5 flex-wrap justify-center"
        >
          <Button href="#projects" variant="primary">
            View My Work <i className="pi pi-arrow-right" />
          </Button>
          <Button href="#cv" variant="outline">
            Download CV <i className="pi pi-download" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-250 animate-bounce-slow"
        style={{
          border: "1px solid var(--border)",
          color: "var(--fg-40)",
        }}
      >
        <i className="pi pi-chevron-down text-sm" />
      </a>
    </section>
  );
}

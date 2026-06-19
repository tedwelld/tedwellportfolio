import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/siteConfig";
import { aboutContent } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag={aboutContent.tag} title={aboutContent.title} />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <ScrollReveal>
            <div className="space-y-4 text-[0.97rem] leading-[1.8]" style={{ color: "var(--fg-60)" }}>
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}

              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { icon: "pi-envelope", label: siteConfig.email.primary, href: `mailto:${siteConfig.email.primary}` },
                  { icon: "pi-at", label: siteConfig.email.gmail, href: `mailto:${siteConfig.email.gmail}` },
                  { icon: "pi-phone", label: siteConfig.phone },
                  { icon: "pi-map-marker", label: siteConfig.location },
                ].map((chip) => (
                  <div key={chip.label} className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-50)" }}>
                    <i className={`pi ${chip.icon} text-sm`} style={{ color: "var(--accent)" }} />
                    {chip.href ? (
                      <a href={chip.href} className="hover:text-[var(--accent)] transition-colors duration-200">
                        {chip.label}
                      </a>
                    ) : (
                      <span>{chip.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-5">
            {siteConfig.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="card p-6 text-center" style={{ borderRadius: "12px" }}>
                  <i className={`pi ${stat.icon} text-2xl block mb-3`} style={{ color: "var(--accent)" }} />
                  <span className="block font-display text-2xl font-bold mb-1" style={{ color: "var(--fg)" }}>
                    {stat.value}
                  </span>
                  <span className="block text-xs" style={{ color: "var(--fg-40)" }}>
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Professional highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {siteConfig.highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card p-6 h-full">
                <i className={`pi ${item.icon} text-xl block mb-3`} style={{ color: "var(--accent)" }} />
                <h3 className="font-display text-base mb-2" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-50)" }}>
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

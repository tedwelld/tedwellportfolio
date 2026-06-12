import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/siteConfig";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag="Who I Am" title="IT Specialist & Software Engineer" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <ScrollReveal>
            <div className="space-y-4 text-[0.97rem] leading-[1.8]" style={{ color: "var(--fg-60)" }}>
              <p>
                I am a modern technology professional with expertise in{" "}
                <strong style={{ color: "var(--fg-80)", fontWeight: 600 }}>
                  ASP.NET, Angular, C#, Azure cloud technologies, and CI/CD automation
                </strong>
                , combined with practical IT infrastructure and networking knowledge. My skill set enables
                me to contribute across the full software development lifecycle — from application design
                and development to deployment, cloud hosting, and operational support.
              </p>
              <p>
                As a Junior Software Developer and Network Engineer, I bridge the gap between software
                engineering and infrastructure operations, bringing a unique full-spectrum perspective to
                enterprise technology solutions. I am committed to building secure, maintainable, and
                scalable systems that deliver real business value.
              </p>

              {/* Contact chips */}
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { icon: "pi-envelope", label: siteConfig.email.primary, href: `mailto:${siteConfig.email.primary}` },
                  { icon: "pi-at",       label: siteConfig.email.gmail, href: `mailto:${siteConfig.email.gmail}` },
                  { icon: "pi-phone",    label: siteConfig.phone },
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

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {siteConfig.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div
                  className="card p-6 text-center"
                  style={{ borderRadius: "12px" }}
                >
                  <i
                    className={`pi ${stat.icon} text-2xl block mb-3`}
                    style={{ color: "var(--accent)" }}
                  />
                  <span
                    className="block font-display text-2xl font-bold mb-1"
                    style={{ color: "var(--fg)" }}
                  >
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
      </div>
    </section>
  );
}

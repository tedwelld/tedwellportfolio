import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { certifications } from "@/data/education";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding section-alt">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel
            tag="Credentials"
            title="Technical Proficiencies"
            description="Core professional competencies validated through production experience and continuous practice"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.08}>
              <div className="card p-6 h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--pill-bg)", border: "1px solid var(--pill-bd)" }}
                  >
                    <i className={`pi ${cert.icon} text-lg`} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-base mb-0.5" style={{ color: "var(--fg)" }}>
                      {cert.title}
                    </h3>
                    <p className="text-xs mb-2" style={{ color: "var(--accent)" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-50)" }}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

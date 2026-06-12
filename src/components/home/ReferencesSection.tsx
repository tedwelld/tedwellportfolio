import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { references } from "@/data/education";

export default function ReferencesSection() {
  return (
    <section id="references" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel
            tag="References"
            title="Professional References"
            description="Available to provide character, technical, and professional references upon request"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, i) => (
            <ScrollReveal key={ref.name} delay={i * 0.1}>
              <div className="card p-7 h-full">
                <p
                  className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {ref.role}
                </p>
                <p
                  className="text-xs mb-4 pb-4"
                  style={{
                    color: "var(--fg-40)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {ref.company}
                </p>
                <p className="font-display text-base mb-3" style={{ color: "var(--fg)" }}>
                  {ref.name}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-50)" }}>
                    <i className="pi pi-phone text-xs flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span>{ref.phone}</span>
                  </div>
                  {ref.email && (
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-50)" }}>
                      <i className="pi pi-envelope text-xs flex-shrink-0" style={{ color: "var(--accent)" }} />
                      <a
                        href={`mailto:${ref.email}`}
                        className="hover:text-[var(--accent)] transition-colors duration-200 break-all"
                      >
                        {ref.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

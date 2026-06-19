import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel
            tag="Academic Background"
            title="Education"
            description="Formal qualifications and academic foundation in information technology"
          />
        </ScrollReveal>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {education.map((item, i) => (
            <ScrollReveal key={item.qualification} delay={i * 0.1}>
              <div
                className="flex items-start gap-5 p-6 rounded-xl transition-all duration-250 hover:translate-x-1.5"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <i className="pi pi-book text-2xl flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-display text-base" style={{ color: "var(--fg)" }}>
                      {item.qualification}
                    </h3>
                    <span className="text-xs" style={{ color: "var(--accent)" }}>
                      {item.period}
                    </span>
                  </div>
                  <p className="flex items-center gap-1.5 text-sm mb-1" style={{ color: "var(--fg-40)" }}>
                    <i className="pi pi-building text-xs" style={{ color: "var(--accent)" }} />
                    {item.institution}
                    {item.field && <span> · {item.field}</span>}
                  </p>
                  {item.details && (
                    <p className="text-xs leading-relaxed" style={{ color: "var(--fg-50)" }}>
                      {item.details}
                    </p>
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

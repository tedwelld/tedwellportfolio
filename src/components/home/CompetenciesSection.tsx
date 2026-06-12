import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { competencies } from "@/data/skills";

export default function CompetenciesSection() {
  return (
    <section id="competencies" className="section-padding section-alt">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag="Core Strengths" title="Key Competencies" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {competencies.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card p-7 text-center h-full">
                <i
                  className={`pi ${item.icon} text-2xl block mb-4`}
                  style={{ color: "var(--accent)" }}
                />
                <h4 className="font-display text-base mb-2.5" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg-50)" }}>
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

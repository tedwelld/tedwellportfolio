import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag="Tech Stack" title="Technical Skills" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 0.08}>
              <div className="card p-6 h-full">
                <h4
                  className="flex items-center gap-2 text-sm font-semibold mb-4"
                  style={{ color: "var(--fg)", fontFamily: "var(--font-body)" }}
                >
                  <i className={`pi ${group.icon}`} style={{ color: "var(--accent)" }} />
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

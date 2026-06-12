import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag="Career" title="Work Experience" />
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="relative pl-14">
                  {/* Dot */}
                  <div
                    className="absolute left-3 top-1 w-4 h-4 rounded-full"
                    style={{
                      background: "var(--accent)",
                      border: "3px solid var(--bg-surface)",
                      boxShadow: "0 0 0 3px rgba(204,0,0,0.2)",
                    }}
                  />

                  <div className="card p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-xl" style={{ color: "var(--fg)" }}>
                        {item.title}
                      </h3>
                      {item.current && (
                        <span
                          className="text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full"
                          style={{
                            background: "rgba(204,0,0,0.15)",
                            color: "var(--accent)",
                            border: "1px solid var(--pill-bd)",
                          }}
                        >
                          <i className="pi pi-check-circle mr-1" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <p
                      className="flex items-center gap-1.5 text-sm mb-4"
                      style={{ color: "var(--fg-40)" }}
                    >
                      <i className="pi pi-building text-xs" style={{ color: "var(--accent)" }} />
                      {item.company} — {item.location}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-sm pl-4 relative"
                          style={{ color: "var(--fg-55)" }}
                        >
                          <span
                            className="absolute left-0 top-[0.55rem] w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--accent)" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag text-[0.7rem] px-2.5 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

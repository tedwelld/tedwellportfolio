import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { expertise } from "@/data/skills";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding section-alt">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag="What I Do" title="Areas of Expertise" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card p-8 h-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--pill-bg)", border: "1px solid var(--pill-bd)" }}
                >
                  <i className={`pi ${item.icon} text-xl`} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-display text-lg mb-4" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
                <ul className="space-y-2">
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

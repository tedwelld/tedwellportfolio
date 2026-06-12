import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/data/skills";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel tag="What I Offer" title="Services" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.07}>
              <div className="card p-7 h-full">
                <i
                  className={`pi ${service.icon} text-2xl block mb-4`}
                  style={{ color: "var(--accent)" }}
                />
                <h3 className="font-display text-base mb-3" style={{ color: "var(--fg)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-50)" }}>
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

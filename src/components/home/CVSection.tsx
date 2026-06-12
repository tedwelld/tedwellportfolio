import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { cvFiles } from "@/data/education";

export default function CVSection() {
  return (
    <section id="cv" className="section-padding section-alt">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel
            tag="Documents"
            title="Download My CV"
            description="Choose the version that best matches your requirements"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvFiles.map((cv, i) => (
            <ScrollReveal key={cv.title} delay={i * 0.1}>
              <div className="card p-9 text-center flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "var(--pill-bg)", border: "1px solid var(--pill-bd)" }}
                >
                  <i className={`pi ${cv.icon} text-2xl`} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-display text-lg mb-2.5" style={{ color: "var(--fg)" }}>
                  {cv.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--fg-50)" }}>
                  {cv.description}
                </p>
                <Button
                  href={cv.file}
                  download={cv.download}
                  variant="primary"
                  className="w-full justify-center"
                >
                  <i className="pi pi-download" /> Download CV
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

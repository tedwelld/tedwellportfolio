import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { projects, githubBanner } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel
            tag="Portfolio"
            title="Featured Projects"
            description="Production websites and platforms delivered for clients across tourism, events, and hospitality"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <div
                className="group rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className={`relative h-52 bg-gradient-to-br ${project.gradient}`}>
                  <span className="absolute top-4 right-4 text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.4)", color: "var(--accent)", border: "1px solid var(--pill-bd)" }}
                  >
                    {project.status}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-white/15 tracking-wide">
                    {project.title}
                  </span>
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                  >
                    <Button href={project.url} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
                      View Live <i className="pi pi-external-link" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                    {project.role}
                  </p>
                  <h3 className="font-display text-lg mb-2" style={{ color: "var(--fg)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--fg-50)" }}>
                    {project.description}
                  </p>
                  <p className="text-xs leading-relaxed mb-4 italic" style={{ color: "var(--fg-40)" }}>
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tag text-[0.65rem] px-2 py-0.5">{tech}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-[0.7rem] px-2.5 py-0.5 opacity-80">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--pill-bg)", border: "1px solid var(--pill-bd)" }}
              >
                <i className="pi pi-github text-2xl" style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1.5" style={{ color: "var(--fg)" }}>
                  {githubBanner.title}
                </h3>
                <p className="text-sm max-w-lg leading-relaxed" style={{ color: "var(--fg-50)" }}>
                  {githubBanner.description}
                </p>
              </div>
            </div>
            <Button href={githubBanner.url} target="_blank" rel="noopener noreferrer" variant="primary">
              {githubBanner.cta} <i className="pi pi-arrow-right" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

const contactItems = [
  {
    icon: "pi-envelope",
    label: "Primary Email",
    value: siteConfig.email.primary,
    href: `mailto:${siteConfig.email.primary}`,
  },
  {
    icon: "pi-at",
    label: "Gmail",
    value: siteConfig.email.gmail,
    href: `mailto:${siteConfig.email.gmail}`,
  },
  {
    icon: "pi-phone",
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "pi-map-marker",
    label: "Location",
    value: siteConfig.location,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-tdz">
        <ScrollReveal>
          <SectionLabel
            tag="Get In Touch"
            title="Contact"
            description={siteConfig.availability}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <ScrollReveal>
            <div>
              <h3 className="font-display text-2xl mb-2.5" style={{ color: "var(--fg)" }}>
                Let&apos;s Connect
              </h3>
              <p className="text-sm mb-7" style={{ color: "var(--fg-50)" }}>
                Open to new opportunities, collaborations, and consultations. Reach out via any channel below.
              </p>

              <div className="flex flex-col gap-3.5">
                {contactItems.map((item) => {
                  const inner = (
                    <>
                      <div
                        className="w-10 h-10 rounded-[9px] flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--pill-bg)", border: "1px solid var(--pill-bd)" }}
                      >
                        <i className={`pi ${item.icon}`} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <span className="block text-[0.7rem]" style={{ color: "var(--fg-40)" }}>
                          {item.label}
                        </span>
                        <span className="block text-sm font-medium" style={{ color: "var(--fg-80)" }}>
                          {item.value}
                        </span>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3.5 p-4 rounded-[10px] transition-all duration-200 hover:translate-x-1 group"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-3.5 p-4 rounded-[10px]"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Social + References CTA */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-display text-2xl mb-2.5" style={{ color: "var(--fg)" }}>
                Follow Me
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--fg-50)" }}>
                Connect on social media and stay up to date with my work.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* YouTube */}
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl transition-all duration-250 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-50)",
                  }}
                >
                  <i className="pi pi-youtube text-2xl group-hover:text-[#ff0000] transition-colors" />
                  <span className="text-xs font-medium">YouTube</span>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl transition-all duration-250 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-50)",
                  }}
                >
                  <svg className="w-6 h-6 group-hover:text-[#dc2743] transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-xs font-medium">Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl transition-all duration-250 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-50)",
                  }}
                >
                  <i className="pi pi-facebook text-2xl group-hover:text-[#1877f2] transition-colors" />
                  <span className="text-xs font-medium">Facebook</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl transition-all duration-250 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-50)",
                  }}
                >
                  <svg className="w-6 h-6 group-hover:text-[#25d366] transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="WhatsApp">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-xs font-medium">WhatsApp</span>
                </a>
              </div>

              {/* References preview */}
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <h4
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  <i className="pi pi-users" /> References
                </h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-50)" }}>
                  Three professional references are available — including IT Manager at Shearwater Adventures
                  and managers from Three Choirs Distribution and Midlands State University.
                </p>
                <Button href="#references" variant="outline" size="sm">
                  View All References <i className="pi pi-arrow-right" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

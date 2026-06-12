interface SectionLabelProps {
  tag: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionLabel({ tag, title, description, className = "" }: SectionLabelProps) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <span
        className="inline-block text-xs font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-3.5"
        style={{
          color: "var(--accent)",
          background: "var(--pill-bg)",
          border: "1px solid var(--pill-bd)",
        }}
      >
        {tag}
      </span>
      <h2
        className="font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm" style={{ color: "var(--fg-50)" }}>
          {description}
        </p>
      )}
    </div>
  );
}

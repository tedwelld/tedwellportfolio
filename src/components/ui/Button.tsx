import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "sm";
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
}

const base =
  "inline-flex items-center gap-2 font-semibold cursor-pointer transition-all duration-300 rounded-[6px] whitespace-nowrap";

const variants = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(204,0,0,0.35)]",
  outline:
    "bg-transparent border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5",
};

const sizes = {
  default: "px-7 py-3.5 text-sm",
  sm:      "px-4 py-2 text-xs",
};

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  download,
  target,
  rel,
  onClick,
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

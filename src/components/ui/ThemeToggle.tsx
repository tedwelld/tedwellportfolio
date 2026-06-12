"use client";

import { useSiteTheme } from "@/contexts/NavbarThemeContext";

/**
 * Moon-to-sun theme toggle from uiverse.io
 * Original by juanpabl0svn (variation of alexruix's switch)
 * https://uiverse.io/juanpabl0svn/mighty-fireant-46
 * MIT License
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useSiteTheme();
  const isLight = theme === "light";

  return (
    <label
      className="tdz-theme-switch"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      <input
        type="checkbox"
        checked={isLight}
        onChange={toggleTheme}
      />
      <span className="tdz-slider" />
      <span className="tdz-decoration" />
    </label>
  );
}

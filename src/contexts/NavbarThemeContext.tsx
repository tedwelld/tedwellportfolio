"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { SiteTheme } from "@/types";

interface SiteThemeContextValue {
  theme: SiteTheme;
  toggleTheme: () => void;
  setTheme: (t: SiteTheme) => void;
}

const defaultValue: SiteThemeContextValue = {
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
};

export const SiteThemeContext = createContext<SiteThemeContextValue>(defaultValue);

export function NavbarThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("tdz-theme") as SiteTheme | null;
    if (saved === "light") setThemeState("light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("tdz-theme", theme);
  }, [theme]);

  const toggleTheme = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));
  const setTheme = (t: SiteTheme) => setThemeState(t);

  return (
    <SiteThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </SiteThemeContext.Provider>
  );
}

export function useSiteTheme() {
  return useContext(SiteThemeContext);
}

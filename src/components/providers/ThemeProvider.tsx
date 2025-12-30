"use client";

import { createContext, ReactNode, useLayoutEffect, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

// Type guard untuk memastikan value adalah valid Theme
const isValidTheme = (value: unknown): value is Theme => {
  return value === "dark" || value === "light";
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Lazy initializer yang SSR-safe
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"; // SSR

    const savedTheme = localStorage.getItem("theme-preference");
    if (isValidTheme(savedTheme)) {
      return savedTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useLayoutEffect(() => {
    // Effect hanya untuk update DOM, BUKAN untuk setState
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const updateTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme-preference", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    updateTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: updateTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

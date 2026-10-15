"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return { theme, toggleTheme, mounted };
}

export default function ThemeToggle({
  className = "",
  alwaysShowLabel = false,
}: {
  className?: string;
  alwaysShowLabel?: boolean;
}) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`xp-btn xp-btn-ghost flex items-center justify-center gap-1.5 ${
        alwaysShowLabel ? "!px-3 !py-1.5" : "!px-2 sm:!px-3 !py-1.5"
      } ${className}`}
      title={
        mounted && theme === "dark"
          ? "Switch to Daylight Aero (Light Mode)"
          : "Switch to Midnight Aero (Dark Mode)"
      }
      aria-label="Toggle light or dark theme"
      type="button"
    >
      <span className="text-sm select-none leading-none" aria-hidden="true">
        {mounted && theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span
        className={`text-xs font-semibold ${
          alwaysShowLabel ? "inline" : "hidden sm:inline"
        }`}
      >
        {mounted && theme === "dark" ? "Midnight" : "Daylight"}
      </span>
    </button>
  );
}

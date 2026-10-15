import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        aero: {
          cyan: "#67E8F9",
          mint: "#A7F3D0",
          sky: "#BAE6FD",
          blue: "#93C5FD",
          teal: "#5EEAD4",
        },
      },
      backgroundImage: {
        "aurora-radial":
          "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(103,232,249,0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(167,243,208,0.20) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 55% 45%, rgba(186,230,253,0.18) 0%, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, 2%) scale(1.03)" },
          "66%": { transform: "translate(-2%, 3%) scale(0.98)" },
        },
        "float-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "badge-pop": {
          "0%": { opacity: "0", transform: "scale(0.85) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "float-in": "float-in 0.6s ease-out forwards",
        "badge-pop": "badge-pop 0.5s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      boxShadow: {
        glass:
          "0 4px 24px 0 rgba(100,200,240,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.04)",
        "glass-lg":
          "0 8px 40px 0 rgba(100,200,240,0.14), 0 2px 12px 0 rgba(0,0,0,0.06)",
        "glass-hover":
          "0 12px 48px 0 rgba(100,200,240,0.20), 0 4px 16px 0 rgba(0,0,0,0.08)",
        "inner-highlight": "inset 0 1px 0 0 rgba(255,255,255,0.8)",
      },
    },
  },
  plugins: [],
};

export default config;

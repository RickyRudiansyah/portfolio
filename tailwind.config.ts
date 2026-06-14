import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        border: "#222222",
        "text-primary": "#F5F5F5",
        "text-secondary": "#888888",
        "tag-bg": "#1A1A1A",
        "tag-text": "#AAAAAA",
        "badge-active-bg": "#1A2A1A",
        "badge-active-text": "#5A9A5A",
        "badge-active-border": "#2A4A2A",
        "badge-funded-bg": "#1A1A2A",
        "badge-funded-text": "#5A5AAA",
        "badge-funded-border": "#2A2A4A",
        "badge-finalist-bg": "#2A1A1A",
        "badge-finalist-text": "#AA7A5A",
        "badge-finalist-border": "#4A2A2A",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        hero: "clamp(48px, 8vw, 96px)",
        "section-number": "clamp(48px, 8vw, 96px)",
        xl: "clamp(32px, 5vw, 56px)",
        lg: "clamp(20px, 3vw, 28px)",
      },
    },
  },
  plugins: [],
};

export default config;

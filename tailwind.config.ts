import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-surface": "var(--bg-surface)",
        "bg-elevated": "var(--bg-elevated)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "accent-blue-dark": "var(--accent-blue-dark)",
        "accent-blue-light": "var(--accent-blue-light)",
        "accent-green": "var(--accent-green)",
        "accent-green-dim": "var(--accent-green-dim)",
        border: "var(--border)",
        "autopel-navy": "#0d1520",
        "sec-green-muted": "#4a7a4a",
        "hacker-bg": "#050a05",
      },
      fontFamily: {
        display: ['"Space Mono"', "ui-monospace", "monospace"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

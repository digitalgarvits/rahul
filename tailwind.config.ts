import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#070E1B",
          900: "#0B1528",
          850: "#0F1E36",
          800: "#152847",
          700: "#1E3A67",
          600: "#254C87",
          500: "#2563EB",
          400: "#3B82F6",
          300: "#60A5FA",
          200: "#93C5FD",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },
        navy: {
          DEFAULT: "#0B1528",
          light: "#162846",
          dark: "#060B14",
        },
        accent: {
          DEFAULT: "#D97706",
          light: "#F59E0B",
          dark: "#B45309",
          glow: "#FEF3C7",
        },
        surface: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "'Times New Roman'", "Times", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        card: "0 10px 30px -4px rgba(11, 21, 40, 0.08), 0 4px 10px -2px rgba(11, 21, 40, 0.04)",
        elevated: "0 20px 40px -8px rgba(11, 21, 40, 0.12), 0 6px 15px -3px rgba(11, 21, 40, 0.06)",
        accent: "0 10px 25px -3px rgba(217, 119, 6, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

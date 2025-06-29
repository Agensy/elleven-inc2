import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A2D54",
          50: "#f0f3f8",
          100: "#d9e2ee",
          200: "#b8c9dc",
          300: "#8ca8c4",
          400: "#5b82a8",
          500: "#3b6690",
          600: "#2f5078",
          700: "#1A2D54",
          800: "#152444",
          900: "#0f1a34",
          950: "#081124",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#192849",
          50: "#f0f2f8",
          100: "#d8dcee",
          200: "#b6bfdc",
          300: "#8a9bc4",
          400: "#5773a8",
          500: "#355390",
          600: "#2a4278",
          700: "#192849",
          800: "#15233e",
          900: "#101b33",
          950: "#0a1226",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Dark theme colors
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Light theme colors
        light: {
          50: "#020617",
          100: "#0f172a",
          200: "#1e293b",
          300: "#334155",
          400: "#475569",
          500: "#64748b",
          600: "#94a3b8",
          700: "#cbd5e1",
          800: "#e2e8f0",
          900: "#f1f5f9",
          950: "#f8fafc",
        },
        // Elleven brand colors
        elleven: {
          primary: "#1A2D54",
          secondary: "#192849",
          "primary-light": "#2A4A7A",
          "secondary-light": "#2A3F5F",
          "primary-dark": "#152444",
          "secondary-dark": "#141E3A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "glow-xs": "0 0 10px rgba(234, 88, 12, 0.2)",
        "glow-sm": "0 0 20px rgba(234, 88, 12, 0.3)",
        "glow-md": "0 0 30px rgba(234, 88, 12, 0.4)",
        "light-xs": "0 1px 3px rgba(0, 0, 0, 0.1)",
        "light-sm": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "light-md": "0 10px 15px rgba(0, 0, 0, 0.1)",
        "light-lg": "0 20px 25px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

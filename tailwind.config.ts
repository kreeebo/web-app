import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        seashell: "#FEF3EC",
        "eerie-black": "#191919",
        "jet-black": "#2B2B2B",
        "giants-orange": "#FF5E28",
        "majorelle-blue": "#613BDF",
        chartreuse: "#D9FF44",
        "chartreuse-500": "#AADD05",
        "chartreuse-400": "#C9F625",
        "imperial-red": "#FF4646",
        mustard: "#FFE144",
        silver: "#CDCDCD",
        bronze: "#FF9F46",
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
      borderRadius: {
        "4xl": "28px",
        "5xl": "32px",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

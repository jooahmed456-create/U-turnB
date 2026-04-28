import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          dark: "#ea580c",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          card: "#141414",
          border: "#242424",
        },
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d4daca",
          300: "#b5c0a8",
          400: "#97a684",
          500: "#7a8d68",
          600: "#607151",
          700: "#4c5a41",
          800: "#3f4937",
          900: "#353e2f",
        },
        sand: {
          50: "#faf9f6",
          100: "#f3f1eb",
          200: "#e8e4da",
          300: "#d5cfc0",
        },
        dark: "#2d2d2d",
        light: "#faf9f6",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

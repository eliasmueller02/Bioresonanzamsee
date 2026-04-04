import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f2f7f7",
          100: "#ddeaeb",
          200: "#bdd6d7",
          300: "#94babb",
          400: "#649495",
          500: "#527b7c",
          600: "#466769",
          700: "#3c5556",
          800: "#334647",
          900: "#2b3b3c",
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

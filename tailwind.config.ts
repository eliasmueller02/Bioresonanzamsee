import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fffe",
          100: "#bdf6f6",
          200: "#85fefe",
          300: "#82fffa",
          400: "#5ce0dc",
          500: "#3cbcb8",
          600: "#2a9a97",
          700: "#1e7876",
          800: "#155755",
          900: "#0d3635",
        },
        dark: "#2c2c2c",
        light: "#fef9fa",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

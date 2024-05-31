import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nav: ['"Roboto"', '"Helvetica Neue"', "sans-serif"],
      hero: ['"Dancing Script"', '"Georgia"', "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#FF70AB",
        secondary: "#FFAF61",
        tertiary: "#FFDB5C",
        quaternary: "#C3FF93",
      },
    },
  },
  plugins: [],
};
export default config;

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
        primary: "#61C0BF",
        secondary: "#BBDED6",
        tertiary: "#FAE3D9",
        quaternary: "#FFB6B9",
      },
    },
  },
  plugins: [],
};
export default config;

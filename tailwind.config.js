const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/pages/blog/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dancingScript: ["Dancing Script", "cursive"],
    },
  },

  colors: {
    ...colors,
    transparent: "transparent",
    current: "currentColor",
    white: "#ffffff",
    purple: "#3f3cbb",
    midnight: "#121063",
    metal: "#565584",
    tahiti: "#3ab7bf",
    silver: "#ecebff",
    "bubble-gum": "#ff77e9",
    bermuda: "#78dcca",
  },
};
export const plugins = [];

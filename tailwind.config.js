/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "96rem",
      },
      borderWidth: {
        1: "1px",
      },
      aspectRatio: {
        "4/5": "4 / 5",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          "base-content": "#6c7485",
          "base-200": "#f8f8f8",
          accent: "#d49566",
          primary: "#f2e0f6",
          secondary: "#f5e7f9",
          "neutral-content": "#999",
          "base-content": "#5f6573",
        },
      },
    ],
  },
};

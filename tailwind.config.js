/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        product: {
          purple: "#8284FA",
          "purple-dark": "#5E60CE",
          blue: "#4EA8DE",
          "blue-dark": "#1E6F9F",
        },
        base: {
          gray: {
            700: "#0D0D0D",
            600: "#1A1A1A",
            500: "#262626",
            400: "#333333",
            300: "#808080",
            200: "#D9D9D9",
            100: "#F2F2F2",
          },
          danger: "#E25858",
        },
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};

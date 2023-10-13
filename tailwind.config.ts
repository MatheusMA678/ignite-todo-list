/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        product: {
          purple: {
            DEFAULT: "#8284FA",
            dark: "#5E60CE"
          },
          blue: {
            DEFAULT: "#4EA8DE",
            dark: "#1E6F9F",
          }
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
        sans: ['var(--inter-font)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
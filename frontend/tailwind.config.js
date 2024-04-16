/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white1: "#cbd5e1",
      white2: "#e2e8f0",
      white3: "#94a3b8",
      dark1: "#475569",
      dark2: "#1e293b",
      transparent: "transparent",
      error: "#dc2626",
      success: "#84cc16",
    },
    extend: {
      fontFamily: {
        display: "Roboto Mono, monospace",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateX(-1rem)" },
          "100%": { opacity: "1", transform: "translateX(0rem)" },
        },
      },
    },
  },
  plugins: [],
};

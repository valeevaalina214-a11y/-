import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rocket Agency brand palette.
        lavender: {
          50: "#f4f2ff",
          100: "#ece8ff",
          200: "#ddd6ff",
          300: "#c7bbff",
          400: "#ab97fb",
          500: "#9575f4", // primary accent
          600: "#7f57e6",
        },
        milk: "#f6f1ea", // milky white
        ink: "#0f0e13", // near-black
        graphite: "#2a2833", // dark grey
      },
      fontFamily: {
        // Wide grotesk display + neutral text (set via next/font CSS variables).
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(79, 60, 140, 0.35)",
        card: "0 12px 40px -20px rgba(79, 60, 140, 0.28)",
      },
      maxWidth: {
        container: "1400px",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

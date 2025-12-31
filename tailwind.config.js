/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0B0A17",
          secondary: "#120F2E",
        },
        surface: "#2D1E5F",
        primary: "#5B31D6",
        accent: "#8B5CF6",
        text: {
          primary: "#FFFFFF",
          secondary: "#D1D5DB",
          muted: "#6B7280",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(91, 49, 214, 0.4)",
        "glow-lg": "0 0 30px rgba(91, 49, 214, 0.5)",
        "glow-xl": "0 0 40px rgba(91, 49, 214, 0.6)",
        "glow-sm": "0 0 15px rgba(91, 49, 214, 0.3)",
        depth:
          "0 4px 20px rgba(91, 49, 214, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "slide-in": "slideIn 0.3s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

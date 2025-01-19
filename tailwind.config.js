/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        secondary: {
          light: "#F0F0F0",
          dark: "#121212",
        },
        accent: {
          light: "#2563EB",
          dark: "#4F46E5",
        },
        hoverAccent: {
          light: "#3B82F6",
          dark: "#6366F1",
        },
        textPrimary: {
          light: "#000000E6",
          dark: "#E4E4E7",
        },
        textSecondary: {
          light: "#00000099",
          dark: "#A1A1AA",
        },
        border: {
          light: "#E5E7EB",
          dark: "#373742",
        },
        icon: {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
      },
      boxShadow: {
        light: "0 4px 6px rgba(0, 0, 0, 0.1)",
        dark: "0 4px 6px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

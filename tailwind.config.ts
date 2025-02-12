import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        // "sidebar-mobile": "calc(100% - 72px)",
        // "sidebar-desktop": "calc(100% - 140px)",
        // "sidebar-sm": "calc(100% - 200px)",
        "sidebar-md": "calc(100% - 300px)",
        "sidebar-lg": "calc(100% - 400px)",
        "sidebar-xl": "calc(100% - 700px)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans], // Menggunakan Poppins sebagai default font sans-serif
        roboto: ["var(--font-roboto)", "sans-serif"], // Roboto untuk kebutuhan lain
      },
      colors: {
        darkPrimary: "#212223",
        darkSecondary: "#333639",
        greenPrimary: "#41E9BD",
        redPrimary: "#F42D92",
        bluePrimary: "#53ABFF",
        yellowPrimary: "#F1CF18",
        yellowDark: "#88791D",
        placeholderColor: "#9BA3AF",
        borderColor: "#444444",
      },
      opacity: {
        secondary: "0.6",
      },
    },
  },
  plugins: [],
} satisfies Config;

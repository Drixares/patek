import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        third: "rgba(36, 36, 36, .4)",
      },
      backgroundImage: {
        "header-pattern": "url('/img/hero.png')",
      }
    },
  },
  plugins: [],
};
export default config;

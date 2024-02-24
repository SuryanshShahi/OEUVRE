import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1f23",
        secondary: "#c5c5c6",
        heading: "#c4ef17",
        button: "linear-gradient(to bottom, #b4855b, #4e342e)",
        backgroundColor:
          "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 36%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

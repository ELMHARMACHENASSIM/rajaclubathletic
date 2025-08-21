import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        pB: ["pB", "sans serif"],
        pR: ["pR", "sans serif"],
        pL: ["pL", "sans serif"],
        ar: ["ar", "sans serif"],
      },
      colors: { green: "#365E32", dark: "#1E201E" },
    },
  },
  plugins: [flowbite.plugin()],
};

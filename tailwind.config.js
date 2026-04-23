import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [scrollbar],
};

export default config;

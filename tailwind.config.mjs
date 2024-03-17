/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D5A88",
        secondary: "#9795B5",
        button: "#54DD12",
      },
      dropShadow: {
        'out': '0 2px 10px   rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
};

/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
    // ...
  ],
};

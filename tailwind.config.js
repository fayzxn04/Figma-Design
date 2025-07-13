/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   "below-xs": { max: "559px" },
      // },
      screens: {
        xsmax: { max: "559px" }, // use xsmax instead of below-xs
      },
    },
  },
  plugins: [],
  safelist: ["below-xs:bg-red-500"],
};

export default config;

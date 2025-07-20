// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         xsmax: { max: "559px" }, // custom breakpoint
//       },
//     },
//   },
//   plugins: [],
//   safelist: ["xsmax:bg-red-500", "xsmax:text-yellow-200"],
// };

// export default config;

// tailwind.config.js
import plugin from "tailwindcss/plugin";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsmax: { max: "559px" },
      },
      fontFamily: {
        heading: ["var(--font-volkhov)", "serif"],
        subheading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  safelist: ["animate-scroll", "xsmax:bg-red-500", "xsmax:text-yellow-200"],

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("xsmax", "@media (max-width: 559px)");
    }),
  ],
};

export default config;

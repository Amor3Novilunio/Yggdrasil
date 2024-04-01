/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js",
];
export const theme = {
  fontFamily: {
    raleway: ["Raleway", "sans-serif"],
  },
};
export const darkMode = "class";
export const plugins = [
  require("tw-elements-react/dist/plugin.cjs"),
  // scrollbar
  function ({ addUtilities }) {
    const newUtil = {
      ".scrollbar-thin": {
        scrollbarWidth: "thin",
        scrollbarColor: "rgb(35 35 35) white",
      },
      ".scrollbar-webkit": {
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgb(31 41 55)",
          borderRadius: "20px",
          border: "1px solid white",
        },
      },
    };

    addUtilities(newUtil, ["responsive", "hover"]);
  },
];

// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Manrope", "Poppins", "Sans-Serif"],
    },
    colors: {
      primary: "#2563EB",
      secondary: "#DBFF00",
    },
    backgroundColor: {
      primary: "#2563EB",
      secondary: "#DBFF00",
    },
    backgroundImage: {
      "bg-service": "url('/img/bg-service.png')",
    },
  },
  plugins: [flowbite.plugin()],
};

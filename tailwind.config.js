/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Poppins", "serif"], // Corrected syntax
      },
    },
  },
  plugins: [require("daisyui")],
};

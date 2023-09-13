/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-community":
          "radial-gradient(51.51% 51.52% at 50% 46.86%, #453E97 1.56%, rgba(0, 0, 0, 0.72) 100%)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};

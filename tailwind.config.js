module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Open: ["Open", "Sans-serif"],
      },
      backgroundImage: {
        backGround: 'url("/images/bg.webp")',
      },

      colors: {
        grayinput: "#C4C4C4",
        buttonBlue: "#4AC9FF",
      },
      boxShadow: {
        inputShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

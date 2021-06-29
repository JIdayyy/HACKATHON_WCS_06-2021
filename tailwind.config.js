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
        pink: "#925392",
        darkPink: "#6E256E",
        grayinput: "#C4C4C4",
        buttonBlue: "#4AC9FF",
        returnButton: "#731C7D",
      },
      boxShadow: {
        buttonShadow: "10px 10px 20px rgba(0, 0, 0, 0.15)",
        inputShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        sm: "1000px",
      },
      width: {
        sideBar: '25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

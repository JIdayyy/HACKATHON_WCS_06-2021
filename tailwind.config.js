module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Open: ['Open', 'Sans-serif'],
      },
      backgroundImage: {
        backGround: 'url("/images/bg.webp")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

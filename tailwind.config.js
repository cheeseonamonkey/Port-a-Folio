module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "martel-sans": ["Martel Sans", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        "varela-round": ["Varela Round", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        allan: ["Allan", "sans-serif"],
        arvo: ["Arvo", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"]
      },
    },
  },
  variants: {
    extend: {},
  },
};

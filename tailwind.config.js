module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        card: "50px",
        "explore-card": "370px",
      },
      maxWidth: {
        "explore-card": "370px",
      },
      // backgroundImage: {
      //   "search-bg": "url('/images/search-bg.png')",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
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

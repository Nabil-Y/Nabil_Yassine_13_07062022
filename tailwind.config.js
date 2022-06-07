module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        home: "920px",
        user: "720px",
      },
      colors: {
        primary: "#00bc77",
        "primary-dark": "#42b983",
        secondary: "#2c3e50",
        "secondary-dark": "#12002b",
        white: "#FFF",
        black: "#000",
        grey: "#CCC",
      },
    },
  },
  plugins: [],
};

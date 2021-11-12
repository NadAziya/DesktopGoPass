module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      greenHome: "#0cc9b6",
    }),
    extend: {
      backgroundImage: {
        form: "url('/src/Images/form.jpg')",
      },
    },
    fontFamily: {
      openSans: ["OpenSans"],
      sansPro: ["sansPro"],
      sansProBold: ["sansProBold"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

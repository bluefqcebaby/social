module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Fredoka", "sans-serif"],
      anton: ["Prompt", "sans-serif"],
      varela: ["Varela Round", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

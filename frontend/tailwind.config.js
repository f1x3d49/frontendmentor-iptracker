/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vdgray: "hsl(0, 0%, 17%)",
        dgray: "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        desktop: `url("/src/images/pattern-bg-desktop.png")`,
        mobile: `url("/src/images/pattern-bg-mobile.png")`,
      },
    },
  },
  plugins: [],
};

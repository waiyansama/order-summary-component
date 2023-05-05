/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D6E1FF",
        secondary: "#F0F2FD",
        accent: "#382AE1",
      },
      fontFamily: {
        rhd: ["Red Hat Display", "sans-serif"],
      },
      minHeight: {
        568: "568px",
      },
      width: {
        450: "28.125rem",
      },
      height: {
        700: "43.75rem",
      },
      backgroundImage: {
        "pattern-mobile": "url(public/img/pattern-background-mobile.svg)",
        "pattern-desktop": "url(public/img/pattern-background-desktop.svg)",
      },
    },
  },
  plugins: [],
};


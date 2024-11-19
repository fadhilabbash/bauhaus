/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37afb0",
        secondary: "#e1f5f6",
        secondary2: "#C2ECEC",
        secondary3: "#F35588",
        darkBlue: '#242b3e',
        mediumBlue: '#34405b',
      },
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
};

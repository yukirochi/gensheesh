/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gap: {
        "5p": "5%",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        stylescript: ['playlist'],
      },
      width:{
        "50p": "50%",
      },
      colors: {
        customblue: '#000000',
      },
    },
  },
  plugins: [],
};

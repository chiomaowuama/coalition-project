/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        "darkbluebg":"#2c3c4d",
        "darktext":"#789fc1cc"
      }
    },
    fontFamily:{
      smallertext:["lato"],
      oswald:["Oswald"],
      textstyle:["Bebas Neue"]
    },
  },
  plugins: [ require("tailwind-scrollbar"),],
}


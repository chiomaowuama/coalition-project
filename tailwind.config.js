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
        "footerbluebg":"#415469",
        "darktext":"#597399d4",
        "darkbrown":"#311e10"
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


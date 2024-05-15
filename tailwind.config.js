/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#101415",
        offWhite: "#DBDBDB",
        mainOffWhite: "#F5F5F5",
        border: "#BDBDBD",
        box1: "#D6FEC5",
        box2: "#D6EDFE",
        box3: "#FDFFAE",
        box4: "#FDE2CD",
      },
    },
  },
  plugins: [],
};

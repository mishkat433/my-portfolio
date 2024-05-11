//  @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'page-color': '#0A192F',
      'main-color': '#F97316',
      'red': '#fc6060',
      'sec-red': '#ff9696',
      'yellow': '#ffe89e',
      'yellow2': '#EEE8FF',
      'white': '#fff',
      'gray': '#BCC0C1',
      'gray-light': '#E5E5E5',
      'black': '#000000',
      // #EEE8FF

    },
    fontFamily: {

    },

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },

    backgroundImage: {
      'main-bg': "url('/src/images/bg-1.png')",
      'intro-bg': "linear-gradient(to bottom , rgba(3, 1, 10, 0.5), #ff9696a2), url('/src/images/3.jpg') ",
    }


  },
  plugins: [require("daisyui")],
}
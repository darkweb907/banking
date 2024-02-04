/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            './**/*.{html,js}',
             ],
  theme: {
    extend: {
      fontFamily:{
        body:"Josefin Sans",
      },
      color:{
        pull:"#130FD2"
      },
      aspectRatio: {
        '2/0': '2 / 0',
        '1/1': '1/1',
      },
      
    },
  },
  plugins: [],
}


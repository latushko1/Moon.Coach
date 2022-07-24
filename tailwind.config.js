/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': {'max': '470px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl': {'max': '1780px'},
      'ad':{'max':'360px'}
    },

    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: '#EFEEE8',
        secondary: '#333333',
        primaryDark: '#E4E2D3',
      },
    },


  },
  plugins: [],
}

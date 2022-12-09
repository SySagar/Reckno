/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      fontFamily:{
        prompt : ['Prompt'],
        Rajadhani : ['Rajdhani'],
        Montserrat : ['Montserrat'],
        Quicksand : ['Quicksand'],
        Roboto : ['Roboto']
      }
    },
    colors: {
      'yellow-theme': '#f5f2ea',
      'footer-color': '#d0d0e1',
      'glow': '#ff0066'
    },
    scale: {
      '200': '2.00',
      '175': '1.75',
      '105': '1.05',
    },
    boxShadow: {
      '3xl': '50px 40px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}

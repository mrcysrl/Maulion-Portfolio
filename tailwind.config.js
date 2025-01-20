/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Text', 'serif'],  
        hammersmith: ['Hammersmith One', 'sans-serif'],  
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
      screens: {
        'sm': '0px',   
        'md': '500px',   
        'lg': '720px',  
        'xl': '1000px',  
        '2xl': '1200px', 
      },
    },
  },
  plugins: [],
};

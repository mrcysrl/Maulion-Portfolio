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
        'fade-in-1': 'fadeInUp 0.75s ease forwards', 
        'fade-in-2': 'fadeInUp 1s ease forwards', 
        'fade-in-3': 'fadeInUp 1.25s ease forwards', 
        'fade-in-4': 'fadeInUp 1.5s ease forwards', 
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3rem)' },
        },
        fadeInUp: { 
          '0%': { opacity: '0', transform: 'translateY(3rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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

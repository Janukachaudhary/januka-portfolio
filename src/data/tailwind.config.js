/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        // 'duration | timing-function | iteration-count'
        'float-up': 'floatUp 3s ease-in-out infinite',
      },
      keyframes: {
        floatUp: {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0' 
          },
          '50%': { 
            transform: 'translateY(-10px)', 
            opacity: '1' 
          },
          '100%': { 
            transform: 'translateY(0px)', 
            opacity: '1' 
          },
        },
      },
    },
  },
  plugins: [],
}

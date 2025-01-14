/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite", // Slows down spinning
        "typing": "typing 2s steps(20) alternate, blink .7s ",
        'fade-in': 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        "spin-gradient": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
        
      },
      colors: {
        'light-blue': 'rgb(179, 208, 242)', // This is the base color
         "customBlue": '#1f3449', // Add your custom color here

      },
    },
  },
  plugins: [],
}


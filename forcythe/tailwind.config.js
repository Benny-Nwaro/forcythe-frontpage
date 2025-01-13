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
      },
      keyframes: {
        "spin-gradient": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        'light-blue': 'rgb(179, 208, 242)', // This is the base color
         "customBlue": '#1f3449', // Add your custom color here

      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0D10',
          secondary: '#101318',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A8AFB8',
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#818CF8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

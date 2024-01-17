/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "Fontspring": ["Fontspring", "sans-serif"],
      },
      fontSize: {
        'xs': ['0.812rem', '120%'],
        'sm': ['0.875rem', '120%'],
        'base': ['1rem', '120%'],
        'md': ['1.20rem', '120%'],
        'lg': ['1.250rem', '120%'],
        'xl': ['1.438rem', '120%'],
        '2xl': ['1.625rem', '120%'],
        '3xl': ['1.812rem', '120%'],
        '4xl': ['2rem', '120%'],
      },
    },
  },
  plugins: [],
}


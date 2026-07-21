/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8f0',
          100: '#ffeedb',
          200: '#ffd9b3',
          300: '#ffbc80',
          400: '#ff9647',
          500: '#F7941D', // Megasus Primary Orange
          600: '#e57a0d',
          700: '#be5f0b',
          800: '#974b11',
          900: '#7a3f12',
          950: '#421e07',
        },
        dark: {
          bg: '#0B0F17',
          card: '#151D2A',
          border: '#2A364F',
          text: '#F1F5F9',
          muted: '#94A3B8'
        },
        secondary: '#1A1A1A',
        accent: '#2563EB',
        lightGray: '#F5F7FA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}

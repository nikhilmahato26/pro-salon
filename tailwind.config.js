/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A96E', light: '#E8D5B0', dark: '#A07840' },
        blush: { DEFAULT: '#F2B8C6', light: '#FAE8EE', dark: '#D4809A' },
        nude: { DEFAULT: '#E8D5C4', light: '#F5EDE4', dark: '#C4A882' },
        cream: '#FBF7F4',
        ebony: '#0A0A0A',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
}

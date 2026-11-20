/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090909',
        charcoal: '#141212',
        burgundy: {
          DEFAULT: '#4B101E',
          dark: '#350B15',
          light: '#65172A',
          glow: 'rgba(75, 16, 30, 0.45)',
        },
        crimson: {
          DEFAULT: '#A92843',
          muted: '#8E2037',
          bright: '#C43252',
        },
        dustyrose: {
          DEFAULT: '#C58D9C',
          light: '#D7A7B3',
          dark: '#B07585',
        },
        softblush: '#E5C6CE',
        warmivory: '#F2EDE9',
        mutedgrey: '#969091',
        borderline: 'rgba(242, 237, 233, 0.08)',
        borderhighlight: 'rgba(197, 141, 156, 0.25)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"DM Serif Display"', 'serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      boxShadow: {
        'glow-burgundy': '0 0 60px -15px rgba(169, 40, 67, 0.35)',
        'glow-crimson': '0 0 40px -10px rgba(169, 40, 67, 0.5)',
        'luxury-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const safeRequire = (name) => {
  try { return require(name); } catch { return null; }
};
const forms = safeRequire('@tailwindcss/forms');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'barn-red': '#780000',
        'fire-brick': '#c1121f',
        'papaya-whip': '#fdf0d5',
        'prussian-blue': '#003049',
        'air-super-blue': '#669bbc',
        // convenience
        accent: '#c1121f',
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d-deep': '0 30px 80px rgba(0,0,0,0.55)',
        'glass-soft': '0 10px 30px rgba(2,6,23,0.35)',
        'neon-sm': '0 8px 30px rgba(193,18,31,0.12)',
      },
      keyframes: {
        'float-3d': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'float-3d': 'float-3d 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 14s ease-in-out infinite',
      },
      backgroundImage: theme => ({
        'brand-soft': `linear-gradient(120deg, ${theme('colors.barn-red')}, ${theme('colors.fire-brick')} 30%, ${theme('colors.prussian-blue')} 70%)`,
      }),
    },
  },
  plugins: forms ? [forms] : [],
};

// const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'class',
  darkMode: ['class'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    // fontFamily: {
    //   sans: ['Söhne', 'sans-serif'],
    //   mono: ['Söhne Mono', 'monospace'],
    // },
    extend: {
      width: {
        authPageWidth: '370px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        gray: {
          20: '#e0f2fe', // sky.50
          50: '#bae6fd', // sky.100
          100: '#7dd3fc', // sky.200
          200: '#38bdf8', // sky.300
          300: '#0ea5e9', // sky.400
          400: '#0284c7', // sky.500
          500: '#0369a1', // sky.600
          600: '#075985', // sky.700
          700: '#0c4a6e', // sky.800
          800: '#0a3e58', // custom color to match sky.850
          850: '#075985', // sky.700 (reused for smoother gradient)
          900: '#0a3e58', // sky.800
        },
        green: {
          50: '#f1f9f7',
          100: '#def2ed',
          200: '#a6e5d6',
          300: '#6dc8b9',
          400: '#41a79d',
          500: '#10a37f',
          550: '#349072',
          600: '#126e6b',
          700: '#0a4f53',
          800: '#06373e',
          900: '#031f29',
        },
        'brand-purple': '#ab68ff',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-secondary-alt': 'var(--text-secondary-alt)',
        'text-tertiary': 'var(--text-tertiary)',
        'ring-primary': 'var(--ring-primary)',
        'header-primary': 'var(--header-primary)',
        'header-hover': 'var(--header-hover)',
        'header-button-hover': 'var(--header-button-hover)',
        'surface-active': 'var(--surface-active)',
        'surface-hover': 'var(--surface-hover)',
        'surface-primary': 'var(--surface-primary)',
        'surface-primary-alt': 'var(--surface-primary-alt)',
        'surface-primary-contrast': 'var(--surface-primary-contrast)',
        'surface-secondary': 'var(--surface-secondary)',
        'surface-tertiary': 'var(--surface-tertiary)',
        'surface-tertiary-alt': 'var(--surface-tertiary-alt)',
        'border-light': 'var(--border-light)',
        'border-medium': 'var(--border-medium)',
        'border-medium-alt': 'var(--border-medium-alt)',
        'border-heavy': 'var(--border-heavy)',
        'border-xheavy': 'var(--border-xheavy)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-radix')(),
    // require('@tailwindcss/typography'),
  ],
};

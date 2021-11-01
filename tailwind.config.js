module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          light: 'var(--color-secondary-light)',
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        negative: 'var(--color-negative)',
        positive: 'var(--color-positive)',
        'primary-background': {
          light: 'var(--background-primary-light)',
          DEFAULT: 'var(--background-primary)',
          dark: 'var(--background-primary-dark)',
        },
        'secondary-background': {
          light: 'var(--background-secondary-light)',
          DEFAULT: 'var(--background-secondary)',
          dark: 'var(--background-secondary-dark)',
        },
        'primary-text': 'var(--color-text-primary)',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active', 'hover'],
    extend: {
      opacity: ['disabled'],
      lineClamp: ['responsive', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};

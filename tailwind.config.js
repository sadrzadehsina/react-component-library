module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: {
          light: 'var(--color-default-light)',
          DEFAULT: 'var(--color-default)',
          dark: 'var(--color-default-dark)',
        },
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
        success: {
          light: 'var(--color-success-light)',
          DEFAULT: 'var(--color-success)',
          dark: 'var(--color-success-dark)',
        },
        error: {
          light: 'var(--color-error-light)',
          DEFAULT: 'var(--color-error)',
          dark: 'var(--color-error-dark)',
        },
        warning: {
          light: 'var(--color-warning-light)',
          DEFAULT: 'var(--color-warning)',
          dark: 'var(--color-warning-dark)',
        },
        info: {
          light: 'var(--color-info-light)',
          DEFAULT: 'var(--color-info)',
          dark: 'var(--color-info-dark)',
        },

        'default-background': {
          light: 'var(--background-default-light)',
          DEFAULT: 'var(--background-default)',
          dark: 'var(--background-default-dark)',
        },
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
        'success-background': {
          light: 'var(--background-success-light)',
          DEFAULT: 'var(--background-success)',
          dark: 'var(--background-success-dark)',
        },
        'error-background': {
          light: 'var(--background-error-light)',
          DEFAULT: 'var(--background-error)',
          dark: 'var(--background-error-dark)',
        },
        'warning-background': {
          light: 'var(--background-warning-light)',
          DEFAULT: 'var(--background-warning)',
          dark: 'var(--background-warning-dark)',
        },
        'info-background': {
          light: 'var(--background-info-light)',
          DEFAULT: 'var(--background-info)',
          dark: 'var(--background-info-dark)',
        },

        'default-text': 'var(--color-text-default)',
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)',
        'success-text': 'var(--color-text-success)',
        'error-text': 'var(--color-text-error)',
        'warning-text': 'var(--color-text-warning)',
        'info-text': 'var(--color-text-info)',

        'alert-background-error': 'var(--alert-background-error)',
        'alert-text-error': 'var(--alert-text-error)',
        'alert-background-success': 'var(--alert-background-success)',
        'alert-text-success': 'var(--alert-text-success)',
        'alert-background-warning': 'var(--alert-background-warning)',
        'alert-text-warning': 'var(--alert-text-warning)',
        'alert-background-info': 'var(--alert-background-info)',
        'alert-text-info': 'var(--alert-text-info)',
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

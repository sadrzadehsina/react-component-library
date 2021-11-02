import tinyColor from 'tinycolor2';

export const mapTheme = (theme) => {
  return {
    '--color-primary-light': tinyColor(theme.primary).brighten(),
    '--color-primary': theme.primary,
    '--color-primary-dark': tinyColor(theme.primary).darken(),
    '--color-secondary-light': tinyColor(theme.secondary).brighten(),
    '--color-secondary': theme.secondary,
    '--color-secondary-dark': tinyColor(theme.secondary).darken(),
    '--color-success-light': tinyColor(theme.success).brighten(),
    '--color-success': theme.success,
    '--color-success-dark': tinyColor(theme.success).darken(),
    '--color-error-light': tinyColor(theme.error).brighten(),
    '--color-error': theme.error,
    '--color-error-dark': tinyColor(theme.error).darken(),
    '--color-text-primary': theme.textPrimary,
    '--color-text-secondary': theme.textSecondary,
    '--color-text-success': theme.textSuccess,
    '--color-text-error': theme.textError,
    '--background-primary-light': tinyColor(theme.backgroundPrimary).brighten(),
    '--background-primary': theme.backgroundPrimary,
    '--background-primary-dark': tinyColor(theme.backgroundPrimary).darken(),
    '--background-secondary-light': tinyColor(
      theme.backgroundSecondary
    ).brighten(),
    '--background-secondary': theme.backgroundSecondary,
    '--background-secondary-dark': tinyColor(
      theme.backgroundSecondary
    ).darken(),
    '--background-success-light': tinyColor(theme.backgroundSuccess).brighten(),
    '--background-success': theme.backgroundSuccess,
    '--background-success-dark': tinyColor(theme.backgroundSuccess).darken(),
    '--background-error-light': tinyColor(theme.backgroundError).brighten(),
    '--background-error': theme.backgroundError,
    '--background-error-dark': tinyColor(theme.backgroundError).darken(),
  };
};

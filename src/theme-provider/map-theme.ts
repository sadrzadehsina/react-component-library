import tinyColor from 'tinycolor2';

export const mapTheme = (theme) => {
  return {
    '--color-default-light': tinyColor(theme.default).brighten(),
    '--color-default': theme.default,
    '--color-default-dark': tinyColor(theme.default).darken(),

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

    '--color-warning-light': tinyColor(theme.warning).brighten(),
    '--color-warning': theme.warning,
    '--color-warning-dark': tinyColor(theme.warning).darken(),

    '--color-info-light': tinyColor(theme.info).brighten(),
    '--color-info': theme.info,
    '--color-info-dark': tinyColor(theme.info).darken(),

    '--color-text-default': theme.textDefault,
    '--color-text-primary': theme.textPrimary,
    '--color-text-secondary': theme.textSecondary,
    '--color-text-success': theme.textSuccess,
    '--color-text-error': theme.textError,
    '--color-text-warning': theme.textWarning,
    '--color-text-info': theme.textInfo,

    '--background-default-light': tinyColor(theme.backgroundDefault).brighten(),
    '--background-default': theme.backgroundDefault,
    '--background-default-dark': tinyColor(theme.backgroundDefault).darken(),

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

    '--background-warning-light': tinyColor(theme.backgroundWarning).brighten(),
    '--background-warning': theme.backgroundWarning,
    '--background-warning-dark': tinyColor(theme.backgroundWarning).darken(),

    '--background-info-light': tinyColor(theme.backgroundInfo).brighten(),
    '--background-info': theme.backgroundInfo,
    '--background-info-dark': tinyColor(theme.backgroundInfo).darken(),

    '--alert-background-error': theme.alertBackgroundError,
    '--alert-text-error': theme.alertTextError,
    '--alert-background-success': theme.alertBackgroundSuccess,
    '--alert-text-success': theme.alertTextSuccess,
    '--alert-background-warning': theme.alertBackgroundWarning,
    '--alert-text-warning': theme.alertTextWarning,
    '--alert-background-info': theme.alertBackgroundInfo,
    '--alert-text-info': theme.alertTextInfo,
  };
};

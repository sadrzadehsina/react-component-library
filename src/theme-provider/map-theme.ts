import { LightenDarkenColor } from 'lighten-darken-color';

export const mapTheme = (theme) => {
  return {
    '--color-primary-light': LightenDarkenColor(theme.primary, 100),
    '--color-primary': theme.primary,
    '--color-primary-dark': LightenDarkenColor(theme.primary, -100),
    '--color-secondary-light': LightenDarkenColor(theme.secondary, 100),
    '--color-secondary': theme.secondary,
    '--color-secondary-dark': LightenDarkenColor(theme.secondary, -100),
    '--color-positive': theme.positive,
    '--color-negative': theme.negative,
    '--color-text-primary': theme.textPrimary,
    '--background-primary-light': LightenDarkenColor(
      theme.backgroundPrimary,
      100
    ),
    '--background-primary': theme.backgroundPrimary,
    '--background-primary-dark': LightenDarkenColor(
      theme.backgroundPrimary,
      -100
    ),
    '--background-secondary-light': LightenDarkenColor(
      theme.backgroundSecondary,
      100
    ),
    '--background-secondary': theme.backgroundSecondary,
    '--background-secondary-dark': LightenDarkenColor(
      theme.backgroundSecondary,
      -10
    ),
  };
};

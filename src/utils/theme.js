export const COLOR_TYPES = {
  main: 'main',
  light: 'light',
  dark: 'dark',
};

const theme = {
  colors: {
    orange: {
      [COLOR_TYPES.main]: '#e4af6d',
      [COLOR_TYPES.dark]: '#e5b06e',
    },
    gray: {
      [COLOR_TYPES.main]: '#302f3a',
      [COLOR_TYPES.light]: '#a4abbb',
      [COLOR_TYPES.dark]: '#22222a',
    },
    neutral: {
      [COLOR_TYPES.main]: '#ffffff',
    },
  }
};

export const getOrange = (type = COLOR_TYPES.main) => theme.colors.orange[type];

export const getGray = (type = COLOR_TYPES.main) => theme.colors.gray[type];

export const getNeutral = (type = COLOR_TYPES.main) => theme.colors.neutral[type];

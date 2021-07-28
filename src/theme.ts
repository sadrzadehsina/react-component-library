const primary = () => ({
  button: () => ({
    'bg-blue-600': true,
    'hover:bg-blue-800': true,
    'text-white': true,
  }),
  icon: () => ({
    'text-blue-600': true,
  }),
});

const secondary = () => ({
  button: () => ({
    'bg-yellow-600': true,
    'hover:bg-yellow-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-yellow-600': true }),
});

const error = () => ({
  button: () => ({
    'bg-red-600': true,
    'hover:bg-red-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-red-600': true }),
});

const success = () => ({
  button: () => ({
    'bg-green-600': true,
    'hover:bg-green-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-green-600': true }),
});

const theme = {
  primary,
  secondary,
  error,
  success,
};

const getTheme = (type) => (theme[type] ? theme[type]() : primary());

export default theme;
export { getTheme };

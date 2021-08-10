const white = () => ({
  button: () => ({
    'bg-white-600': true,
    'hover:bg-gray-200': true,
    'text-black': true,
  }),
  icon: () => ({
    'text-white': true,
  }),
  toast: () => ({ 'border-white-600': true }),
});

const primary = () => ({
  button: () => ({
    'bg-blue-600': true,
    'hover:bg-blue-800': true,
    'text-white': true,
  }),
  icon: () => ({
    'text-blue-600': true,
  }),
  toast: () => ({ 'border-blue-600': true }),
});

const secondary = () => ({
  button: () => ({
    'bg-yellow-600': true,
    'hover:bg-yellow-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-yellow-600': true }),
  toast: () => ({ 'border-yellow-600': true }),
});

const error = () => ({
  button: () => ({
    'bg-red-600': true,
    'hover:bg-red-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-red-600': true }),
  toast: () => ({ 'border-red-600': true }),
});

const success = () => ({
  button: () => ({
    'bg-green-600': true,
    'hover:bg-green-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-green-600': true }),
  toast: () => ({ 'border-green-600': true }),
});

const warning = () => ({
  button: () => ({
    'bg-yellow-600': true,
    'hover:bg-yellow-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-yellow-600': true }),
  toast: () => ({ 'border-yellow-600': true }),
});

const info = () => ({
  button: () => ({
    'bg-gray-600': true,
    'hover:bg-gray-800': true,
    'text-white': true,
  }),
  icon: () => ({ 'text-gray-600': true }),
  toast: () => ({ 'border-gray-600': true }),
});

const theme = {
  white,
  primary,
  secondary,
  error,
  success,
  warning,
  info,
};

const getTheme = (type) =>
  type && theme[type.toLowerCase()] ? theme[type.toLowerCase()]() : primary();

export default theme;
export { getTheme };

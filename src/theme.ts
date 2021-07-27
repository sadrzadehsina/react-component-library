const primary = () => ({
  'bg-blue-600': true,
  'hover:bg-blue-800': true,
  'text-white': true,
});

const secondary = () => ({
  'bg-yellow-600': true,
  'hover:bg-yellow-800': true,
  'text-white': true,
});

const error = () => ({
  'bg-red-600': true,
  'hover:bg-red-800': true,
  'text-white': true,
});

const success = () => ({
  'bg-green-600': true,
  'hover:bg-green-800': true,
  'text-white': true,
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

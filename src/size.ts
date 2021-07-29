const small = () => ({
  button: () => ({
    'text-sm': true,
  }),
  icon: () => ({
    'w-5 h-5': true,
  }),
});

const medium = () => ({
  button: () => ({
    'text-md': true,
  }),
  icon: () => ({
    'w-7 h-7': true,
  }),
});

const large = () => ({
  button: () => ({
    'text-lg': true,
  }),
  icon: () => ({
    'w-9 h-9': true,
  }),
});

const size = {
  small,
  medium,
  large,
};

const getSize = (s) => (size[s] ? size[s]() : medium());

export default size;
export { getSize };

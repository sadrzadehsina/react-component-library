import { createContext, useContext } from 'react';

export type OptionType = {
  label: string;
  value: string;
};

const SelectContext = createContext<{
  selectedOption: string;
  changeSelectedOption: (option: OptionType) => void;
}>({
  selectedOption: '',
  changeSelectedOption: (option: OptionType) => {},
});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('`useSelectContext` should be used inside `SelectContext`');
  }

  return context;
};

export { useSelectContext, SelectContext };

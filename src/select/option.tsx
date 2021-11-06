import { FC, ReactNode } from 'react';
import { useSelectContext } from './select-context';

export const Option: FC<{
  children: ReactNode | ReactNode[];
  value: string;
}> = ({ children, value, label }) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li
      className="p-3 block text-default-text hover:bg-default-background-dark cursor-pointer"
      onClick={() => changeSelectedOption({ value, label })}
    >
      {children}
    </li>
  );
};

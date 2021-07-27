import React, { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';
import { getTheme } from '../theme';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  type?: string;
  disabled?: boolean;
  Icon?: ReactChild;
  Adornment?: ReactChild;
}

export const Button: FC<Props> = ({
  children,
  type,
  disabled,
  Icon,
  Adornment,
}) => {
  const className = cn({
    ...getTheme(type),
    'px-5 py-2': true,
    'cursor-not-allowed': disabled,
    'cursor-pointer': !disabled,
    'opacity-50': disabled,
  });

  return (
    <button className={className} disabled={disabled}>
      {Icon && <Icon />}
      {children}
      {Adornment && <Adornment />}
    </button>
  );
};

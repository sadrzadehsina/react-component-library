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
    'px-5 py-2': !Icon && !Adornment,
    'py-2': Icon || Adornment,
    'pr-5': Icon && !Adornment,
    'pl-5': !Icon && Adornment,
    'cursor-not-allowed': disabled,
    'cursor-pointer': !disabled,
    'opacity-50': disabled,
  });

  return (
    <button className={className} disabled={disabled}>
      {Icon && (
        <span className="px-5">
          <Icon />
        </span>
      )}
      <span>{children}</span>
      {Adornment && (
        <span className="px-5">
          <Adornment />
        </span>
      )}
    </button>
  );
};

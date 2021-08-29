import React, { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';
import { getTheme } from '../theme';
import { getSize } from '../size';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  type?: string;
  size?: string;
  disabled?: boolean;
  flat?: boolean;
  startIcon?: ReactChild;
  endIcon?: ReactChild;
}

export const Button: FC<Props> = ({
  children,
  type = 'primary',
  size = 'medium',
  disabled,
  flat,
  startIcon,
  endIcon,
}) => {
  const className = cn({
    ...getTheme(type).button(),
    ...getSize(size).button(),
    'rounded-md': !flat,
    'px-3 py-2': true,
    'cursor-not-allowed': disabled,
    'cursor-pointer': !disabled,
    'disabled:opacity-50': disabled,
    'font-size-lg': true,
  });

  return (
    <button className={className} disabled={disabled}>
      <div className="flex flex-row space-x-2">
        {startIcon && <div>{startIcon}</div>}
        <div className="flex-grow">{children}</div>
        {endIcon && <div>{endIcon}</div>}
      </div>
    </button>
  );
};

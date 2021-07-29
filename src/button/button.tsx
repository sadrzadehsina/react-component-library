import { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';
import { getTheme } from '../theme';
import { getSize } from '../size';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  Icon?: ReactChild;
  Adornment?: ReactChild;
  type?: string;
  size?: string;
  disabled?: boolean;
  flat?: boolean;
}

export const Button: FC<Props> = ({
  children,
  Icon,
  Adornment,
  type = 'primary',
  size = 'medium',
  disabled,
  flat,
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
        {Icon && (
          <div>
            <Icon size={size} />
          </div>
        )}
        <div className="flex-grow">{children}</div>
        {Adornment && (
          <div>
            <Adornment />
          </div>
        )}
      </div>
    </button>
  );
};

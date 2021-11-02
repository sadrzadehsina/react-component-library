import React, { useEffect } from 'react';
import cn from 'classnames';

import { Toast } from './toast-provider';
import { Icon } from '../icon';

import { getTheme } from '../theme';

type ToastMessage = {
  id: string;
  lifetime?: number;
  onRemove?: (id: string) => void;
  truncate?: boolean;
} & Toast;

export const ToastMessage = ({
  id,
  header,
  message,
  lifetime,
  onRemove,
  // truncate = false,
  // icon,
  type,
}: ToastMessage) => {
  useEffect(() => {
    if (lifetime && onRemove) {
      setTimeout(() => {
        onRemove(id);
      }, lifetime);
    }
  }, [lifetime]);

  return (
    <div
      className={cn(
        'flex w-full visible flex-row shadow-lg border-l-4',
        'duration-100 cursor-pointer transform transition-all',
        'hover:scale-102 bg-default',
        `border-${type}`
      )}
    >
      <div className="flex flex-row p-2 flex-no-wrap w-full">
        <div className="flex flex-col flex-no-wrap px-1 w-full">
          <div className="flex my-auto font-bold select-none">{header}</div>
          <p className="-mt-0.5 my-auto break-all flex text-default text-sm">
            {message}
          </p>
        </div>
        <div
          onClick={() => onRemove && onRemove(id)}
          className="w-10 h-12 items-center align-middle mx-auto text-center leading-none text-lg"
        >
          <Icon name="x" size="small" type="info" />
        </div>
      </div>
    </div>
  );
};

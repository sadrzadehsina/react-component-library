import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Stack } from '../stack';
import { Icon } from '../icon';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  type: 'error' | 'success' | 'warning' | 'info';
}

const iconName = (type: String): String => {
  if (type === 'error') return 'exclamation-circle';
  if (type === 'warning') return 'exclamation';
  if (type === 'success') return 'check-circle';
  if (type === 'info') return 'information-circle';
  return 'check-circle';
};

export const Alert: FC<Props> = ({ children, type = 'success' }) => {
  return (
    <div
      className={cn(
        [`bg-alert-background-${type}`],
        [`text-alert-text-${type}`],
        'py-4 px-4 w-full'
      )}
    >
      <Stack spacing={4}>
        <Icon name={iconName(type)} size="small" />
        <span>{children}</span>
      </Stack>
    </div>
  );
};

import React, { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

type Column = {
  sm?: number;
  md?: number;
  lg?: number;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  spacing?: number;
  columns?: Column;
}

export const Grid = ({ children, spacing, columns }: Props) => {
  return (
    <div
      className={cn(
        'grid',
        {
          'grid-flow-col': !columns,
          [`sm:grid-cols-${columns?.sm}`]: columns?.sm,
          [`md:grid-cols-${columns?.md}`]: columns?.md,
          [`lg:grid-cols-${columns?.lg}`]: columns?.lg,
        },
        `gap-${spacing}`
      )}
    >
      {children}
    </div>
  );
};

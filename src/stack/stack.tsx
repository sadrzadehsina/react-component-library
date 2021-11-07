import React, { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  direction: 'row' | 'column';
  spacing: Number;
}

export const Stack: FC<Props> = ({
  children,
  direction = 'row',
  spacing = 2,
  align = 'start',
}) => {
  return (
    <div
      className={cn(
        'flex',
        'flex-1',
        'items-center',
        { 'justify-start': align === 'start' },
        { 'justify-end': align === 'end' },
        { 'justify-center': align === 'center' },
        { 'flex-row': direction === 'row' },
        { 'flex-col': direction === 'column' },
        [`gap-${spacing}`]
      )}
    >
      {React.Children.map(children, (child) => (
        <>{child}</>
      ))}
    </div>
  );
};

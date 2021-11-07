import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Backdrop } from '../backdrop';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { IconButton } from '../icon-button';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
}

export const Dialog: FC<Props> = ({
  children,
  title,
  open,
  size = 'small',
  buttons = [],
}) => {
  return (
    <Backdrop>
      <div
        className={cn('rounded bg-paper-background text-paper-text shadow-md', {
          'w-96': size === 'small',
        })}
      >
        <div className="flex items-center p-4">
          <div className="flex-1">
            {/* TODO: I need to replace this with my `Typography` component */}
            <h6>{title}</h6>
          </div>
          <div>
            <IconButton name="x" size="small" />
          </div>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4">
          <ButtonGroup align="end">
            {buttons.map(({ label, type }) => (
              <Button type={type}>{label}</Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </Backdrop>
  );
};

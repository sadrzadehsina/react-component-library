import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Stack } from '../stack';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
}

export const ButtonGroup: FC<Props> = ({ children, align = 'start' }) => {
  return (
    <Stack spacing={1} align={align}>
      {React.Children.map(children, (button) => React.cloneElement(button))}
    </Stack>
  );
};

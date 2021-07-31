import React, { FC, HTMLAttributes } from 'react';
import { Button, Icon } from '..';
interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  type?: string;
  size?: string;
}

export const IconButton: FC<Props> = ({ name, type, size }) => {
  return (
    <Button size={size} type="white">
      <Icon name={name} size={size} type={type} />
    </Button>
  );
};

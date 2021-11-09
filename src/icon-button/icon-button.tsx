import React, { FC, HTMLAttributes } from 'react';
import { Button, Icon } from '..';
interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  type?: string;
  size?: 'small' | 'medium' | 'large';
}

export const IconButton: FC<Props> = ({ name, type, size = 'medium' }) => {
  return (
    <Button size={size} type="white">
      <Icon name={name} size={size} type={type} />
    </Button>
  );
};

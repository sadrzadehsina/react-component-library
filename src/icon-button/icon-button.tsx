import { useMemo, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Button, Icon } from '..';
import { getTheme } from '../theme';
import { getSize } from '../size';

export interface Props extends HTMLAttributes<HTMLDivElement> {
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

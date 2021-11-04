import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { getSize } from '../size';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: String;
  circle: Boolean;
  size: 'small' | 'medium' | 'large';
}

export const Avatar: FC<Props> = ({ src, circle = false, size = 'medium' }) => {
  return (
    <img
      src={src}
      className={cn({
        'rounded-full items-center justify-center': circle,
        'w-12 h-12': size === 'small',
        'w-18 h-18': size === 'medium',
        'w-24 h-24': size === 'large',
      })}
    />
  );
};

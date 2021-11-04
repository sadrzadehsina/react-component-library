import React, { useMemo, FC, HTMLAttributes } from 'react';
import * as Icons from '@heroicons/react/solid';
import cn from 'classnames';

//NOTE: possible candidate to be a utility
const toPascalCase = function (string) {
  return string
    .match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join('');
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  type?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Icon: FC<Props> = ({ name, type, size = 'medium' }) => {
  const className = cn({
    'w-5 h-5': size === 'small',
    'w-7 h-7': size === 'medium',
    'w-9 h-9': size === 'large',
    [`text-${type}`]: true,
  });

  const iconName = useMemo(() => toPascalCase(name) + 'Icon', [name]);

  const IconComponent = Icons[iconName];

  return <IconComponent className={className} />;
};

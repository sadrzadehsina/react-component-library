import React, { useMemo, FC, HTMLAttributes } from 'react';
import * as Icons from '@heroicons/react/solid';
import cn from 'classnames';
import { getTheme } from '../theme';
import { getSize } from '../size';

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
  size?: string;
}

export const Icon: FC<Props> = ({ name, type, size }) => {
  const className = cn({
    ...getTheme(type).icon(),
    ...getSize(size).icon(),
  });

  const iconName = useMemo(() => toPascalCase(name) + 'Icon', [name]);

  const IconComponent = Icons[iconName];

  return <IconComponent className={className} />;
};

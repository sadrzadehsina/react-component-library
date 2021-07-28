import { useMemo, FC, HTMLAttributes } from 'react';
import * as Icons from '@heroicons/react/solid';
import cn from 'classnames';
import { getTheme } from '../theme';

//NOTE: possible candidate to be a utility
const toPascalCase = function (string) {
  return string
    .match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join('');
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  type?: string;
}

const Icon: FC<Props> = ({ name, type }) => {
  const className = cn({
    ...getTheme(type).icon(),
  });

  const iconName = useMemo(() => toPascalCase(name) + 'Icon', [name]);

  const IconComponent = Icons[iconName];

  return <IconComponent className={className} />;
};

export default Icon;

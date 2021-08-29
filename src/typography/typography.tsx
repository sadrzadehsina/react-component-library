import React, { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  variant?: SVGAnimatedString;
}

const variantMap = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  h5: (props) => <h5 {...props} />,
  h6: (props) => <h6 {...props} />,
  subtitle1: (props) => (
    <h6 {...props} className={cn('text-sm', props.className)} />
  ),
  subtitle2: (props) => (
    <h6 {...props} className={cn('text-xs', props.className)} />
  ),
  body1: (props) => (
    <p {...props} className={cn('text-base', props.className)} />
  ),
  body2: (props) => <p {...props} className={cn('text-sm', props.className)} />,
};

export const Typography: FC<Props> = ({ children, variant = 'body1' }) => {
  const Variant = variantMap[variant as string];

  return <Variant>{children}</Variant>;
};

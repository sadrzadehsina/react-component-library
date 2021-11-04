import React, { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  variant?: SVGAnimatedString;
}

const variantMap = {
  h1: (props) => (
    <h1
      {...props}
      className="text-6xl font-normal leading-normal mt-0 mb-2 text-default-text"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="text-5xl font-normal leading-normal mt-0 mb-2 text-default-text"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="text-4xl font-normal leading-normal mt-0 mb-2 text-default-text"
    />
  ),
  h4: (props) => (
    <h4
      {...props}
      className="text-3xl font-normal leading-normal mt-0 mb-2 text-default-text"
    />
  ),
  h5: (props) => (
    <h5
      {...props}
      className="text-2xl font-normal leading-normal mt-0 mb-2 text-default-text"
    />
  ),
  h6: (props) => (
    <h6
      {...props}
      className="text-1xl font-normal leading-normal mt-0 mb-2 text-default-text"
    />
  ),
  body: (props) => (
    <p
      {...props}
      className="text-base font-light leading-relaxed mt-0 mb-4 text-default-text"
    />
  ),
};

export const Typography: FC<Props> = ({ children, variant = 'body1' }) => {
  const Variant = variantMap[variant as string];

  return <Variant>{children}</Variant>;
};

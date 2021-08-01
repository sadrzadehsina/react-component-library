import React, { FC, HTMLAttributes, ReactChild } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  fluid?: boolean;
}

export const Container: FC<Props> = ({ children, fluid = false }) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

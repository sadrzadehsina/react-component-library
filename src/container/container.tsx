import React, { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

import React, { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
}

export const Section: FC<Props> = ({ children }) => {
  return <div className="section p-8">{children}</div>;
};

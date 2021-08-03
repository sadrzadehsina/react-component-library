import React, { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  lines?: Number;
}

export const Truncate: FC<Props> = ({ children, lines = 3 }) => {
  return <div className={`line-clamp-${lines}`}>{children}</div>;
};

import React, { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
}

export const Paper: FC<Props> = ({ children }) => {
  return (
    <div className="p-8 rounded bg-paper-background text-paper-text shadow-md">
      {children}
    </div>
  );
};

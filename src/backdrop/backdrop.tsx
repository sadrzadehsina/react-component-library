import React, { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
}

export const Backdrop: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col flex-wrap flex-grow items-center justify-center text-default-text bg-default-background min-h-full bg-opacity-10">
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </div>
  );
};

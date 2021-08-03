import React, { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  renderHeader: Function;
  renderBody: Function;
  renderFooter: Function;
}

export const Card: FC<Props> = ({ renderHeader, renderBody, renderFooter }) => {
  return (
    <div className="bg-gray-50 border border-gray-100">
      <div className="header">{renderHeader()}</div>
      <div className="body p-4">{renderBody()}</div>
      <div className="footer p-4 border-t-2 border-white">{renderFooter()}</div>
    </div>
  );
};

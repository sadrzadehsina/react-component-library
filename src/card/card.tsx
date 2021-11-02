import React, { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  renderHeader: Function;
  renderBody: Function;
  renderFooter: Function;
}

export const Card: FC<Props> = ({ renderHeader, renderBody, renderFooter }) => {
  return (
    <div className="bg-default">
      <div className="header text-default-text">{renderHeader()}</div>
      <div className="body p-4 text-default-text">{renderBody()}</div>
      <div className="footer p-4 border-t-2 border-default-light text-default-text">
        {renderFooter()}
      </div>
    </div>
  );
};

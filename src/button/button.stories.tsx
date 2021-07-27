import React from 'react';

import { Button } from '../';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
};

export const Primary = () => <Button type="primary">Primary Button</Button>;

export const Secondary = () => (
  <Button type="secondary">Secondary Button</Button>
);

export const Error = () => <Button type="error">Error Button</Button>;

export const Success = () => <Button type="success">Success Button</Button>;

export const Disabled = () => {
  return (
    <>
      <div>
        <Button type="primary" disabled>
          Primary Button Disabled
        </Button>
      </div>
      <div>
        <Button type="secondary" disabled>
          Secondary Button Disabled
        </Button>
      </div>
      <div>
        <Button type="error" disabled>
          Error Button Disabled
        </Button>
      </div>
      <div>
        <Button type="success" disabled>
          Success Button Disabled
        </Button>
      </div>
    </>
  );
};

export const WithIcon = () => {
  return (
    <Button type="primary" Icon={() => <span>i</span>}>
      Primary Button
    </Button>
  );
};

export const WithAdornment = () => {
  return (
    <Button type="primary" Adornment={() => <span>a</span>}>
      Primary Button
    </Button>
  );
};

export const WithIconAndAdornment = () => {
  return (
    <Button
      type="primary"
      Icon={() => <span>i</span>}
      Adornment={() => <span>a</span>}
    >
      Primary Button
    </Button>
  );
};

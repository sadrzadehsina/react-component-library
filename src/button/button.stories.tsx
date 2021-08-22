import React from 'react';

import { Button, Icon } from '../';

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
      <p>&nbsp;</p>
      <div>
        <Button type="secondary" disabled>
          Secondary Button Disabled
        </Button>
      </div>
      <p>&nbsp;</p>
      <div>
        <Button type="error" disabled>
          Error Button Disabled
        </Button>
      </div>
      <p>&nbsp;</p>
      <div>
        <Button type="success" disabled>
          Success Button Disabled
        </Button>
      </div>
    </>
  );
};

export const Starticon = () => {
  return (
    <Button type="primary" startIcon={<Icon name="annotation" type="white" />}>
      Primary Button
    </Button>
  );
};

export const EndIcon = () => {
  return (
    <Button type="primary" endIcon={<Icon name="chevron-down" type="white" />}>
      Primary Button
    </Button>
  );
};

export const Flat = () => {
  return (
    <Button type="primary" flat>
      Flat Primary Button
    </Button>
  );
};

export const WithSize = () => {
  return (
    <>
      <div>
        <Button type="primary" size="small">
          Small Primary
        </Button>
      </div>
      <p>&nbsp;</p>
      <div>
        <Button type="primary" size="medium">
          Medium Primary
        </Button>
      </div>
      <p>&nbsp;</p>
      <div>
        <Button type="primary" size="large">
          Large Primary
        </Button>
      </div>
    </>
  );
};

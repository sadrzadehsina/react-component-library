import React, { useEffect } from 'react';

import { ThemeProvider } from '..';

import { ToastProvider, useToast } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Toast',
  decorators: [
    (Story) => (
      <ThemeProvider theme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
};

const lifetime = '10000000000';

const MainWithProvider = () => {
  const { pushError, pushSuccess, pushWarning, pushInfo } = useToast();

  useEffect(() => {
    pushError(
      'Error',
      'Ea est dolor deserunt culpa officia commodo aliqua.',
      lifetime
    );
    pushSuccess(
      'Success',
      'Sunt ipsum mollit reprehenderit ut aliquip sunt voluptate pariatur velit ea mollit ullamco duis. Culpa sunt in duis reprehenderit non in anim ex. Incididunt ullamco ut labore esse veniam Lorem nisi id ullamco.',
      lifetime
    );
    pushWarning(
      'Warning',
      'Amet ad qui irure cillum laboris magna mollit cillum sint.',
      lifetime
    );
    pushInfo(
      'Info',
      'Do Lorem mollit eiusmod ipsum ex ipsum ex nisi voluptate nulla magna nisi excepteur Lorem.',
      lifetime
    );
  }, []);

  return null;
};

export const Main = () => {
  return (
    <ToastProvider>
      <MainWithProvider />
    </ToastProvider>
  );
};

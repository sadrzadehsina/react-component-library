import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Container } from './container';

test('should have class of `container` and a default padding of `4px`', () => {
  const { container, debug } = render(<Container />);

  expect(container.firstChild).toHaveClass('container');
  expect(container.firstChild).toHaveClass('px-4');
});

import React from 'react';

import { render } from '@testing-library/react';

import { Truncate } from './truncate';

test('should truncate on the given line number', () => {
  const { container, debug } = render(
    <div style={{ width: '200px' }}>
      <Truncate lines="1">
        Excepteur ea mollit laborum fugiat. Deserunt amet nulla ut fugiat
        pariatur est ad sit labore laboris voluptate ad. Deserunt tempor
        occaecat deserunt Lorem officia in tempor commodo voluptate.
      </Truncate>
    </div>
  );

  expect(container.getElementsByClassName('line-clamp-1')).toHaveLength(1);
});

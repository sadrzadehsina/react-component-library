import React from 'react';
import { render } from '@testing-library/react';
import { Section } from './section';

test('should contain a header, body, and a footer', () => {
  const { container, debug } = render(
    <Section>
      <h1>Section Title</h1>
      <p>
        Magna do duis ex nostrud anim non aute dolor fugiat officia nisi
        commodo. Ea non eiusmod exercitation exercitation occaecat cillum quis
        qui aute proident. Et enim sint voluptate occaecat. Nisi Lorem nostrud
        sint consectetur aute ullamco duis labore aliquip occaecat enim aliqua
        fugiat. Nostrud voluptate amet labore nulla id ea occaecat do ullamco
        Lorem consectetur. Aute qui aliquip velit sunt officia officia nostrud
        incididunt proident exercitation occaecat consequat.
      </p>
    </Section>
  );
  expect(container.getElementsByClassName('section')).toHaveLength(1);
  expect(container.getElementsByClassName('p-8')).toHaveLength(1);
});

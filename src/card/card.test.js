import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card';

const Header = () => <h1>Card Header</h1>;
const Body = () => <p>Card Body</p>;
const Footer = () => <h6>Card Footer</h6>;

test('should contain a header, body, and a footer', () => {
  const { container, debug } = render(
    <Card
      renderHeader={() => <Header />}
      renderBody={() => <Body />}
      renderFooter={() => <Footer />}
    />
  );
  expect(container.getElementsByClassName('header')).toHaveLength(1);
  expect(container.getElementsByClassName('body')).toHaveLength(1);
  expect(container.getElementsByClassName('footer')).toHaveLength(1);
});

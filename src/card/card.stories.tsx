import React from 'react';

import { Card } from './card';
import { Button } from '../button';
import { ThemeProvider } from '..';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Card',
  decorators: [
    (Story) => (
      <ThemeProvider theme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Main = () => {
  const Header = () => <h1>Card Header</h1>;
  const Body = () => <p>Card Body</p>;
  const Footer = () => <h6>Card Footer</h6>;
  return (
    <Card
      renderHeader={() => <Header />}
      renderBody={() => <Body />}
      renderFooter={() => <Footer />}
    />
  );
};

export const HeaderImage = () => {
  const Header = () => <img src="https://placeimg.com/640/480/any" />;
  const Body = () => <p>Card Body</p>;
  const Footer = () => <h6>Card Footer</h6>;
  return (
    <div className="w-3/12">
      <Card
        renderHeader={() => <Header />}
        renderBody={() => <Body />}
        renderFooter={() => <Footer />}
      />
    </div>
  );
};

export const FooterButton = () => {
  const Header = () => <img src="https://placeimg.com/640/480/any" />;
  const Body = () => <p>Card Body</p>;
  const Footer = () => (
    <div className="text-right">
      <Button type="primary">Click Me</Button>
    </div>
  );
  return (
    <div className="w-3/12">
      <Card
        renderHeader={() => <Header />}
        renderBody={() => <Body />}
        renderFooter={() => <Footer />}
      />
    </div>
  );
};

export const ShopCard = () => {
  const Header = () => <img src="https://placeimg.com/640/480/any" />;
  const Body = () => (
    <div>
      <div className="pb-4">
        <h1 className="text-2xl">Product 1</h1>
        <h6 className="text-lg">120$</h6>
      </div>
      <p>
        Fugiat sit sint ut nostrud esse deserunt ad incididunt exercitation
        ullamco consequat. Dolor culpa dolor amet occaecat anim et culpa
        adipisicing veniam ullamco eu Lorem aute. Exercitation est ut nulla quis
        laboris occaecat elit laborum sit officia magna tempor ipsum
        reprehenderit.
      </p>
    </div>
  );
  const Footer = () => (
    <div className="text-right">
      <Button type="success">Buy Me</Button>
    </div>
  );
  return (
    <div className="w-3/12">
      <Card
        renderHeader={() => <Header />}
        renderBody={() => <Body />}
        renderFooter={() => <Footer />}
      />
    </div>
  );
};

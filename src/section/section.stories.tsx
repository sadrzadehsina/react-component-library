import React from 'react';

import { Section } from './section';
import { Typography } from '../typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Section',
};

export const Main = () => {
  return (
    <Section>
      <Typography variant="h1">Section</Typography>
      <Typography variant="body">
        Lorem magna duis reprehenderit ullamco sint cupidatat sit enim anim
        tempor exercitation qui. Exercitation ipsum exercitation exercitation eu
        amet eiusmod. Proident laboris do tempor Lorem ea laboris proident enim
        id nisi laborum deserunt. Voluptate ipsum sit deserunt velit labore
        mollit. Consequat nulla Lorem deserunt velit qui incididunt cupidatat.
        Cillum aute tempor minim culpa culpa culpa deserunt. Minim sit deserunt
        magna est nulla ex eu aute.
      </Typography>
    </Section>
  );
};

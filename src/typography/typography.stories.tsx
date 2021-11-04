import React from 'react';

import { Typography } from './typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Typography',
};

export const Heading = () => {
  return (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </>
  );
};

export const Body = () => {
  return (
    <>
      <Typography variant="body">
        Deserunt nisi id officia enim esse do. Cupidatat eu enim eiusmod
        incididunt anim magna tempor reprehenderit non aute duis dolore in
        mollit. Cupidatat id minim labore labore irure do ipsum ea cupidatat
        cillum ipsum et do. Laboris ipsum deserunt veniam fugiat. Nisi
        adipisicing adipisicing deserunt eu ad aliquip sint cupidatat fugiat.
        Magna ea elit reprehenderit aute.
      </Typography>
    </>
  );
};

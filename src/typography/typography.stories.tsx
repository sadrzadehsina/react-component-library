import React from 'react';

import { Typography } from './typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Typography',
  decorators: [
    (Story) => (
      <div className="prose">
        <Story />
      </div>
    ),
  ],
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

export const Subtitle = () => {
  return (
    <>
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>
    </>
  );
};

export const Body = () => {
  return (
    <>
      <Typography variant="body1">
        Deserunt nisi id officia enim esse do. Cupidatat eu enim eiusmod
        incididunt anim magna tempor reprehenderit non aute duis dolore in
        mollit. Cupidatat id minim labore labore irure do ipsum ea cupidatat
        cillum ipsum et do. Laboris ipsum deserunt veniam fugiat. Nisi
        adipisicing adipisicing deserunt eu ad aliquip sint cupidatat fugiat.
        Magna ea elit reprehenderit aute.
      </Typography>
      <Typography variant="body2">
        Fugiat quis sint eu sit fugiat qui incididunt excepteur excepteur cillum
        aute. Deserunt nulla excepteur ullamco exercitation. Sint sit ipsum ut
        nostrud. Excepteur ipsum elit sunt magna fugiat officia exercitation
        amet laborum dolore proident. Culpa ad occaecat aliquip ex labore minim
        sunt enim aute excepteur anim. Consequat fugiat ea nulla ipsum magna
        laboris tempor aute mollit sint proident sunt consequat adipisicing.
      </Typography>
    </>
  );
};
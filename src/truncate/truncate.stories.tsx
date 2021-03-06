import React from 'react';

import { Truncate } from './truncate';
import { Typography } from '../typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Truncate',
};

export const Fixed = () => (
  <div className="w-3/12">
    <Truncate>
      <Typography variant="body">
        Nisi ea ad et veniam duis aliqua commodo excepteur nostrud non est
        reprehenderit eu. Duis adipisicing eu labore enim labore sit. Ex aute
        dolor eiusmod consequat nisi ipsum labore elit.Aute voluptate et amet
        laborum elit occaecat. Deserunt labore quis reprehenderit nostrud sint
        commodo fugiat sint eu exercitation nostrud sint qui. Ad cillum sit
        culpa nulla nulla aliqua ex duis sit duis eiusmod. Labore labore magna
        cupidatat cillum nisi sint labore non consectetur est ut aute esse. Esse
        sint elit excepteur amet incididunt et veniam qui est occaecat.
      </Typography>
    </Truncate>
  </div>
);

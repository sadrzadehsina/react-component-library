import React from 'react';
import { Grid } from '.';

export default {
  title: 'Components/Grid',
};

export const Main = () => {
  return (
    <Grid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
      <div className="bg-purple-300 text-purple-800 rounded-md p-8 text-center text-4xl font-extrabold">
        1
      </div>
      <div className="bg-purple-300 text-purple-800 rounded-md p-8 text-center text-4xl font-extrabold">
        2
      </div>
      <div className="bg-purple-300 text-purple-800 rounded-md p-8 text-center text-4xl font-extrabold">
        3
      </div>
      <div className="bg-purple-300 text-purple-800 rounded-md p-8 text-center text-4xl font-extrabold">
        4
      </div>
    </Grid>
  );
};

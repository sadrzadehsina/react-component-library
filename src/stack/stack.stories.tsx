import { Stack } from '.';
import { Typography } from '..';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Stack',
};

export const Main = () => {
  return (
    <Stack direction="row" spacing={0}>
      <div className="bg-blue-500 p-4 m-4 text-white text-center">
        <Typography variant="h1">1</Typography>
      </div>
      <div className="bg-blue-500 p-4 m-4 text-white text-center">
        <Typography variant="h1">2</Typography>
      </div>
      <div className="bg-blue-500 p-4 m-4 text-white text-center">
        <Typography variant="h1">3</Typography>
      </div>
    </Stack>
  );
};

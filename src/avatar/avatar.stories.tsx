import { Stack } from '../stack';
import { Avatar } from './avatar';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Avatar',
};

const src = 'https://ui-avatars.com/api/?background=random';

export const Default = () => {
  return <Avatar src="https://ui-avatars.com/api/?name=John+Doe" />;
};

export const Group = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar src="https://ui-avatars.com/api/?background=random" />
      <Avatar src="https://ui-avatars.com/api/?background=random" />
      <Avatar src="https://ui-avatars.com/api/?background=random" />
      <Avatar src="https://ui-avatars.com/api/?background=random" />
    </Stack>
  );
};

export const Circle = () => {
  return <Avatar src={src} circle />;
};

export const Sizes = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar src={src} circle size="small" />
      <Avatar src={src} circle size="medium" />
      <Avatar src={src} circle size="large" />
    </Stack>
  );
};

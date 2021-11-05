import { Alert } from './alert';
import { Stack } from '../stack';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Alert',
};

export const Default = () => {
  return (
    <Stack direction="column">
      <Alert type="error">This is an error alert - check it out!</Alert>
      <Alert type="success">This is an success alert - check it out!</Alert>
      <Alert type="warning">This is an warning alert - check it out!</Alert>
      <Alert type="info">This is an info alert - check it out!</Alert>
    </Stack>
  );
};

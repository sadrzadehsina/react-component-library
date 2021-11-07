import { ButtonGroup } from './button-group';
import { Button } from '../button';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button Group',
};

export const Main = () => {
  return (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  );
};

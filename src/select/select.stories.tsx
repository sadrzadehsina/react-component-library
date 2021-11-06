import { Select } from './select';
import { Option } from './option';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Select',
};

export const Main = () => {
  return (
    <Select>
      <Option value="one" label="One">
        One
      </Option>
      <Option value="two" label="Two">
        Two
      </Option>
      <Option value="three" label="Three">
        Three
      </Option>
      <Option value="four" label="Four">
        Four
      </Option>
    </Select>
  );
};

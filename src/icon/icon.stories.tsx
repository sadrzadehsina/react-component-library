import React from 'react';

import Icon from './icon';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Icon',
};

const Template = (args) => <Icon {...args} />;

export const NamedIcon = Template.bind({});
NamedIcon.args = {
  name: 'annotation',
  type: 'primary',
};

import React from 'react';

import { IconButton } from './icon-button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/IconButton',
};

const Template = (args) => <IconButton {...args} />;

export const NamedIconButton = Template.bind({});
NamedIconButton.args = {
  name: 'annotation',
  type: 'success',
  size: 'medium',
};

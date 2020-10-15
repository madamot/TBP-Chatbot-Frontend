import React from 'react';
import { action } from '@storybook/addon-actions';

import UserInput from './UserInput';

export default {
  component: UserInput,
  title: 'UserInput',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Input_Messenger = () => (
  <UserInput platform='messenger' />
);

export const Input_Teams = () => (
  <UserInput platform='teams' />
);

import React from 'react';
import { action } from '@storybook/addon-actions';

import UserInput from './UserInput';

export default {
  component: UserInput,
  title: 'UserInput',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const QuickRepliesData = [
  {
    id: '1',
    title: 'Reply 1',
  },
  {
    id: '2',
    title: 'Reply 2',
  },
  {
    id: '3',
    title: 'Reply 3',
  },
]

export const Input_Messenger = () => (
  <UserInput platform='messenger' QuickRepliesData={QuickRepliesData} />
);

export const Input_Teams = () => (
  <UserInput platform='teams' QuickRepliesData={QuickRepliesData} />
);

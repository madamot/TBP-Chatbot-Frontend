import React from 'react';
import { action } from '@storybook/addon-actions';

import QuickReply from './QuickReply';


export default {
  component: QuickReply,
  title: 'QuickReply',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const DefaultButtonData = [
  {
    id: '1',
    title: 'my button'
  },
  {
    id: '2',
    title: 'my button'
  },
  {
    id: '3',
    title: 'my button'
  },
]


export const Messenger_Quickreply = () => (
  <>
    <QuickReply />
  </>
);

export const Teams_Quickreply = () => (
  <>
    <QuickReply />
  </>
);

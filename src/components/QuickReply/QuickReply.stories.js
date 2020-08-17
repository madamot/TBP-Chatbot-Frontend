import React from 'react';
import { action } from '@storybook/addon-actions';

import QuickReply from './QuickReply';


export default {
  component: QuickReply,
  title: 'QuickReply',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const QuickRepliesData = [
  {
    id: '1',
    title: 'Reply 1',
    platform: 'messenger',
  },
  {
    id: '2',
    title: 'Reply 2',
    platform: 'messenger',
  },
  {
    id: '3',
    title: 'Reply 3',
    platform: 'messenger',
  },
]

export const QuickRepliesTeamsData = [
  {
    id: '1',
    title: 'Reply 1',
    platform: 'teams',
  },
  {
    id: '2',
    title: 'Reply 2',
    platform: 'teams',
  },
  {
    id: '3',
    title: 'Reply 3',
    platform: 'teams',
  },
]


export const Messenger_Quickreply = () => (
  <>
    <QuickReply QuickRepliesData={QuickRepliesData} />
  </>
);

export const Teams_Quickreply = () => (
  <>
    <QuickReply QuickRepliesData={QuickRepliesTeamsData} />
  </>
);

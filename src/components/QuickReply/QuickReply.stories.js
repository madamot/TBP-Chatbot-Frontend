import React from 'react';
import { action } from '@storybook/addon-actions';

import QuickReply from './QuickReply';


export default {
  component: QuickReply,
  title: 'QuickReply',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const QuickRepliesData = {
  id: '1',
  type: 'quickreply',
  quickreplyData: [
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
};


export const Messenger_Quickreply = () => (
  <>
    <QuickReply platform='messenger' quickreplies={QuickRepliesData} />
  </>
);

export const Teams_Quickreply = () => (
  <>
    <QuickReply platform='teams' quickreplies={QuickRepliesData} />
  </>
);

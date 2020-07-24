import React from 'react';
import { action } from '@storybook/addon-actions';

import Text from './Text';

export default {
  component: Text,
  title: 'Text',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const messageData = {
  id: '1',
  title: 'Hello World',
  platform: 'messenger',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Messenger_Bot = () => <Text message={{ ...messageData, author: messageData.author.BOT }} {...actionsData} />;

export const Messenger_User = () => (
  <Text message={{ ...messageData, platform: 'messenger', author: messageData.author.USER }} {...actionsData} />
);

export const Teams_Bot = () => <Text message={{ ...messageData, platform: 'teams', author: messageData.author.BOT }} {...actionsData} />;

export const Teams_User = () => (
  <Text message={{ ...messageData, platform: 'teams', author: messageData.author.USER }} {...actionsData} />
);

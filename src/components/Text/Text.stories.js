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
  title: 'Hello world',
  platform: 'messenger',
  author: 'bot',
  date: '14-07-20',
  user: 'testUser',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Messenger_Bot = () => <Text message={{ ...messageData }} {...actionsData} />;

export const Messenger_User = () => (
  <Text message={{ ...messageData, platform: 'messenger', author: 'user'}} {...actionsData} />
);

export const Teams_Bot = () => (
  <Text message={{ ...messageData, platform: 'teams' }} {...actionsData} />
);

export const Teams_User = () => (
  <Text message={{ ...messageData, platform: 'teams', author: 'user' }} {...actionsData} />
);

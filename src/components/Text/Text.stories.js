import React from 'react';
import { action } from '@storybook/addon-actions';

import Text from './Text';
import { Messenger_Button, Teams_Button } from '../Button/Button.stories';
import { Multiple_Messenger_Buttons, Multiple_Teams_Buttons } from '../ButtonList/ButtonList.stories';
// import Button from '../Button/Button';

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

export const Messenger_Bot_Text = () => (
  <>
    <Text message={{ ...messageData, author: messageData.author.BOT }} />
  </>
);

export const Messenger_User_Text = () => (
  <Text message={{ ...messageData, platform: 'messenger', author: messageData.author.USER }} />
);

export const Workplace_User_Text = () => (
  <Text message={{ ...messageData, platform: 'workplace', author: messageData.author.USER }} />
);

export const Messenger_Text_With_Button = () => (
  <>
    <Text message={{ ...messageData, author: messageData.author.BOT }} button={Messenger_Button} />
  </>
);

export const Messenger_Text_With_Buttons = () => (
  <>
    <Text message={{ ...messageData, author: messageData.author.BOT }} button={Multiple_Messenger_Buttons} />
  </>
);

export const Teams_Bot_Text = () => (
  <>
    <Text message={{ ...messageData, platform: 'teams', author: messageData.author.BOT }} />
  </>
);

export const Teams_User_Text = () => (
  <Text message={{ ...messageData, platform: 'teams', author: messageData.author.USER }} />
);

export const Teams_Text_With_Button = () => (
  <>
    <Text message={{ ...messageData, platform: 'teams', author: messageData.author.BOT }} button={Messenger_Button} />
  </>
);

export const Teams_Text_With_Buttons = () => (
  <>
    <Text message={{ ...messageData, platform: 'teams', author: messageData.author.BOT }} button={Multiple_Teams_Buttons} />
  </>
);

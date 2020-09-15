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
  message: 'Hello World!',
  platform: 'messenger',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const messageButtonData = {
  id: '1',
  message: 'Hello World!',
  platform: 'messenger',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
  button: [
    {
      id: '1',
      title: 'my button',
    },
  ],
};

export const teamsButtonData = {
  id: '1',
  message: 'Hello World!',
  platform: 'teams',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
  button: [
    {
      id: '1',
      title: 'my button',
    },
  ],
};

export const messageButtonsData = {
  id: '1',
  message: 'Hello World!',
  platform: 'messenger',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
  button: [
    {
      id: '1',
      title: 'my button',
    },
    {
      id: '2',
      title: 'my button 2',
    },
  ],
};

export const teamsButtonsData = {
  id: '1',
  message: 'Hello World!',
  platform: 'teams',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
  button: [
    {
      id: '1',
      title: 'my button',
    },
    {
      id: '2',
      title: 'my button 2',
    },
  ],
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Messenger_Bot_Text = () => (
  <Text data={{ ...messageData, author: messageData.author.BOT }} />
);

export const Messenger_User_Text = () => (
  <Text data={{ ...messageData, platform: 'messenger', author: messageData.author.USER }} />
);

export const Workplace_User_Text = () => (
  <Text data={{ ...messageData, platform: 'workplace', author: messageData.author.USER }} />
);

export const Messenger_Text_With_Button = () => (
  <>
    <Text data={{ ...messageButtonData, author: messageButtonData.author.BOT }} />
  </>
);

export const Messenger_Text_With_Buttons = () => (
  <>
    <Text data={{ ...messageButtonsData, author: messageButtonsData.author.BOT }} button={Multiple_Messenger_Buttons} />
  </>
);

export const Teams_Bot_Text = () => (
  <>
    <Text data={{ ...teamsButtonData, platform: 'teams', author: teamsButtonData.author.BOT }} />
  </>
);

export const Teams_User_Text = () => (
  <Text data={{ ...messageData, platform: 'teams', author: messageData.author.USER }} />
);

export const Teams_Text_With_Button = () => (
  <>
    <Text data={{ ...teamsButtonData, platform: 'teams', author: teamsButtonData.author.BOT }} button={Messenger_Button} />
  </>
);

export const Teams_Text_With_Buttons = () => (
  <>
    <Text data={{ ...teamsButtonsData, platform: 'teams', author: teamsButtonsData.author.BOT }} button={Multiple_Teams_Buttons} />
  </>
);

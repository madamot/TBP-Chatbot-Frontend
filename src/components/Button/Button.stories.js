import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

import { messageData, Messenger_Bot, Teams_Bot } from '../Text/Text.stories';

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

// export const buttonData = {
//   id: '1',
//   title: 'my button'
// };

export const buttonData = [
  {
    id: '1',
    title: 'my button',
  },
]

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


export const Messenger_Button = ({platform}) => (
  <>
    <Button onClick={action('clicked')} buttons={buttonData} platform={platform} />
    {/* <Button onClick={action('clicked')} button={{ ...buttonData}} platform={platform} /> */}
    {/* <Button onClick={action('clicked')} button={{ ...buttonData}} />
    */}
  </>
);

export const Messenger_Buttons = ({platform}) => (
  <>
    <Button onClick={action('clicked')} buttons={DefaultButtonData} platform={platform} />
  </>
);

export const Teams_Button = () => (
  <>
    <Button onClick={action('clicked')} buttons={buttonData} platform='teams' />
  </>
);

export const Teams_Buttons = () => (
  <>
    <Button onClick={action('clicked')} buttons={DefaultButtonData} platform='teams' />
  </>
);

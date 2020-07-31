import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

import ButtonList from '../ButtonList/ButtonList';

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


export const Messenger_Button = ({platform}) => (
  <>
    <ButtonList onClick={action('clicked')} buttons={buttonData} platform={platform} />
    {/* <Button onClick={action('clicked')} button={{ ...buttonData}} platform={platform} /> */}
    {/* <Button onClick={action('clicked')} button={{ ...buttonData}} />
    */}
  </>
);

export const Teams_Button = () => (
  <>
    <ButtonList onClick={action('clicked')} buttons={buttonData} platform='teams' />
  </>
);

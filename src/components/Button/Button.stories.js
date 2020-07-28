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

export const buttonData = {
  title: 'my button'
};


export const Messenger_Button = ({platform}) => (
  <>
    <Button onClick={action('clicked')} button={{ ...buttonData}} platform={platform} />
    {/* <Button onClick={action('clicked')} button={{ ...buttonData}} />
    */}
  </>
);

export const Teams_Button = () => (
  <>
    <Button onClick={action('clicked')} button={{ ...buttonData}} platform='teams' />
  </>
);

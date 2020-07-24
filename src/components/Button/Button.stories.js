import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

import { messageData } from '../Text/Text.stories';

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const buttonData = {
  title: 'my button',
};

// export const actionsData = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

export const Messenger_Button = () => <Button onClick={action('clicked')} button={{ ...buttonData }} message={{ ...messageData}} />;

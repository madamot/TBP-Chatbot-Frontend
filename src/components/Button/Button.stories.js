import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

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


export const Messenger_Button = () => (
    <Button onClick={action('clicked')} buttons={buttonData} platform='messenger' />
);

export const Messenger_Buttons = () => (
    <Button onClick={action('clicked')} buttons={[{id: '1', title: 'my button'}, {id: '2', title: 'button 2'}]} platform='messenger' />
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

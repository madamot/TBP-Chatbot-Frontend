import React from 'react';
import { action } from '@storybook/addon-actions';

import ButtonList from './ButtonList';

import { buttonData } from '../Button/Button.stories';

export default {
  component: ButtonList,
  title: 'ButtonList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

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


export const Multiple_Messenger_Buttons = () => (
  <>
    <ButtonList buttons={DefaultButtonData} />
  </>
);

export const Multiple_Teams_Buttons = () => (
  <>
    <ButtonList buttons={DefaultButtonData} platform='teams' />
  </>
);

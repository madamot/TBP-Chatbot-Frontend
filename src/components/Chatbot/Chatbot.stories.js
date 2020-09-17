import React from 'react';
import { action } from '@storybook/addon-actions';

import Chatbot from './Chatbot';

export default {
  component: Chatbot,
  title: 'Chatbot',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


const conversation = [
  {
    id: '1',
    type: 'text',
    message: 'Hello World!',
    platform: 'messenger',
    author: 'bot',
    date: '14-07-20',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  {
    id: '2',
    type: 'text',
    message: 'How are we?',
    platform: 'messenger',
    author: 'bot',
    date: '14-07-20',
    updatedAt: new Date(2018, 0, 1, 9, 0),
    button: [
      {
        id: '1',
        title: 'my button',
      },
    ],
  },
  {
    id: '3',
    type: 'image',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot',
  },
];


export const Container = () => (
  <>
    <Chatbot conversation={conversation} />
  </>
);

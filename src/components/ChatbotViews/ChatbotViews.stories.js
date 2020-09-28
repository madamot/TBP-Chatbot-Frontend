import React from 'react';
import { action } from '@storybook/addon-actions';

import ChatbotViews from './ChatbotViews';
import UserInput from '../UserInput/UserInput.js';

// import * as ChatbotStories from './Chatbot.stories';

const conversation = [
  {
    id: '1',
    type: 'text',
    title: 'Hello World!',
    platform: 'messenger',
    author: 'bot',
    date: '14-07-20',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  {
    id: '2',
    type: 'text',
    title: 'How are we?',
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
  {
    id: '1',
    type: 'carousel',
    carouselData: [
      {
        id: '1',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../../images/decepticons.jpg'),
        platform: 'messenger',
        author: 'bot',
        button: [
          {
            id: '1',
            title: 'my button',
          },
        ],
      },
      {
        id: '2',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../../images/decepticons.jpg'),
        platform: 'messenger',
        author: 'bot'
      },
      {
        id: '3',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../../images/decepticons.jpg'),
        platform: 'messenger',
        author: 'bot',
        button: [
          {
            id: '1',
            title: 'my button',
          },
        ],
      },
      {
        id: '4',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../../images/decepticons.jpg'),
        platform: 'messenger',
        author: 'bot'
      },
    ]
  }
];

export default {
  component: ChatbotViews,
  title: 'ChatbotViews',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


export const Chatbots = () => (
  <>
    <ChatbotViews conversation={conversation} />
  </>
);

// export const Chatbot_and_input = () => (
//   <>
//     <ChatbotViews />
//     <UserInput />
//   </>
// );

import React from 'react';
import { action } from '@storybook/addon-actions';

import Chatbot from './Chatbot';

export default {
  component: Chatbot,
  title: 'Chatbot',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const QuickRepliesData = [
  {
    id: '1',
    title: 'Reply 1',
  },
  {
    id: '2',
    title: 'Reply 2',
  },
  {
    id: '3',
    title: 'Reply 3',
  },
]

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
  },
  {
    id: '4',
    type: 'sound',
    soundSrc: require('../../audio/Nevergonnagiveyouup.mp3'),
    date: '14-07-20',
    author: 'bot',
  },
  {
    id: '5',
    type: 'video',
    videoSrc: require('../../images/videoplayback.mp4'),
    author: 'bot',
    platform: 'messenger',
    date: '14-07-20',
  }
];


export const Messenger_Chatbot = () => (
  <>
    <Chatbot conversation={conversation} platform='messenger' QuickRepliesData={QuickRepliesData} />
  </>
);

export const Teams_Chatbot = () => (
  <>
    <Chatbot conversation={conversation} platform='teams' QuickRepliesData={QuickRepliesData} />
  </>
);

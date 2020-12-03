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
    author: 'bot',
    date: '14-07-20',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  {
    id: '2',
    type: 'text',
    title: 'How are we?',
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
    author: 'bot',
    date: '14-07-20',
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
        author: 'bot',
        date: '14-07-20',
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
        author: 'bot',
        date: '14-07-20',
      },
      {
        id: '3',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../../images/decepticons.jpg'),
        author: 'bot',
        date: '14-07-20',
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
        author: 'bot',
        date: '14-07-20',
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
  },
  {
    id: '1',
    type: 'quickreply',
    quickreplyData: [
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
  }
];


export const Messenger_Chatbot = () => (
  <>
    <Chatbot conversation={conversation} platform='messenger' />
  </>
);

export const Teams_Chatbot = () => (
  <>
    <Chatbot conversation={conversation} platform='teams' />
  </>
);

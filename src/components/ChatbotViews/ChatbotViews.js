import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Chatbot from '../Chatbot/Chatbot';

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


export default function ChatbotViews() {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chatbot conversation={conversation} />
        <Chatbot conversation={conversation} platform='teams' />
      </div>
      );
}

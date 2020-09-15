import React, { Component }  from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import ButtonList from "../components/ButtonList/ButtonList";
import Text from "../components/Text/Text";
import Carousel from "../components/Carousel/Carousel";
// import Text from "../components/Text/Text";

const botName = "teams";
// const test = ${config.platform};

const messageData = {
  id: '1',
  // message: 'Hello World',
  platform: botName,
  author: {
    BOT: 'bot',
    USER: 'user',
  },
  date: '14-07-20',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const DefaultButtonData = [
  {
    id: '1',
    title: 'my button',
  },
]

export const carouselData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../images/decepticons.jpg'),
    platform: 'teams',
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
    imgSrc: require('../images/decepticons.jpg'),
    platform: 'teams',
    author: 'bot'
  },
  {
    id: '3',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../images/decepticons.jpg'),
    platform: 'teams',
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
    imgSrc: require('../images/decepticons.jpg'),
    platform: 'teams',
    author: 'bot'
  },
];


const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName} bot. I’m here to help you visualise the bot you just configured.`,
      {
        withAvatar: false,
      }
    ),
    createChatBotMessage(
      `Simply interact with me as you would the live bot to see if everything is working as you expect!`,
      {
        withAvatar: false,
        delay: 500,
      }
    ),
  ],

  customComponents: {
    // Replaces the default bot chat message container
    botChatMessage: (props) => <Text className='message' data={{...props, ...messageData, author: messageData.author.BOT }} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <Text className='message' data={{...props, ...messageData, author: messageData.author.USER }} />
  },

  widgets: [
  {
    widgetName: "button",
    widgetFunc: (props) => <ButtonList {...props} platform='teams' buttons={DefaultButtonData} />,
  },
  {
    widgetName: "carousel",
    widgetFunc: (props) => <Carousel {...props} carousel={carouselData} />,
  },
],
}

export default config

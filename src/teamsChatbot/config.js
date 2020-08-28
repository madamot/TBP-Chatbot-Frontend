import React, { Component }  from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import Text from "../components/Text/Text";

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

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName} bot. I’m here to help you explain how I work.`
    ),
  ],

  customComponents: {
    // Replaces the default bot chat message container
    botChatMessage: (props) => <Text data={{...props, ...messageData, author: messageData.author.BOT }} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <Text data={{...props, ...messageData, author: messageData.author.USER }} />
  },
}

export default config

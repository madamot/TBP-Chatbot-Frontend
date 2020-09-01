import React, { Component }  from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import Text from "../components/Text/Text";
// import Text from "../components/Text/Text";

const botName = "messenger";
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
      `Hi I'm ${botName} bot. I’m here to help you visualise the bot you just configured.`,
      {
        withAvatar: false,
      }
    ),
    createChatBotMessage(
      `Simply interact with me as you would the live bot to see if everything is working as you expect!`,
      {
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
}

export default config

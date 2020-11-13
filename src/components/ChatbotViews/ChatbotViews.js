import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Chatbot from '../Chatbot/Chatbot';


export default function ChatbotViews({conversation, addMessage, QuickRepliesData}) {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chatbot conversation={conversation} platform='messenger' addMessage={addMessage} QuickRepliesData={QuickRepliesData} />
        <Chatbot conversation={conversation} platform='teams' addMessage={addMessage} QuickRepliesData={QuickRepliesData} />
      </div>
      );
}

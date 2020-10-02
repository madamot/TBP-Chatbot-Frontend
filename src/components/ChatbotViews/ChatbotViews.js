import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Chatbot from '../Chatbot/Chatbot';


export default function ChatbotViews({conversation, addMessage}) {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chatbot conversation={conversation} addMessage={addMessage} />
        <Chatbot conversation={conversation} platform='teams' addMessage={addMessage} />
      </div>
      );
}

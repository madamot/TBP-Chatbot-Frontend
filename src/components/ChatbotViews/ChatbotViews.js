import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Chatbot from '../Chatbot/Chatbot';


export default function ChatbotViews({conversation, addMessage, mode}) {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chatbot conversation={conversation} platform='messenger' mode={mode} addMessage={addMessage} />
        <Chatbot conversation={conversation} platform='teams' mode={mode} addMessage={addMessage} />
      </div>
      );
}

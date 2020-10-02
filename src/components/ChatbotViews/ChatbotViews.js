import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Chatbot from '../Chatbot/Chatbot';


export default function ChatbotViews({conversation}) {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chatbot conversation={conversation} />
        <Chatbot conversation={conversation} platform='teams' />
      </div>
      );
}

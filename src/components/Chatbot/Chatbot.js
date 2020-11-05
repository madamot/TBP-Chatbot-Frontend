import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
import Image from '../Image/Image';
import Carousel from '../Carousel/Carousel';
import UserInput from '../UserInput/UserInput.js';

const ChatContainer = styled.div`
  width: 25em;
  ${'' /* position: absolute; */}
  height: 30em;
  ${'' /* right: 15px;
  bottom: 15px; */}
  text-align: center;
  overflow-y: scroll;
`;

const getMessage = (msgData, platform) => ({
  text: <Text data={{...msgData, platform: platform}} />,
  image: <Image message={{...msgData, platform: platform}} />,
  carousel: <Carousel carousel={msgData.carouselData} platform={platform} />,
  // error: <Error />,
});

export default function Chatbot({conversation, platform, addMessage}) {

    return (
      <div
        data-testid={platform}
        style={{
          width: "25em",
          border: "1px solid #0084ff"
        }}>
        <ChatContainer>
          {conversation.map(msgData => (
            <div key={msgData.id + msgData.title}>
              {getMessage(msgData, platform)[msgData.type]}
            </div>
          ))}
        </ChatContainer>
        <UserInput platform={platform} addMessage={addMessage} />
      </div>
      );
}

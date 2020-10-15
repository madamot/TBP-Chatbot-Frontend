import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
import Image from '../Image/Image';
import Carousel from '../Carousel/Carousel';

const ChatContainer = styled.div`
  width: 25em;
  ${'' /* position: absolute; */}
  border: 1px solid #0084ff;
  height: 30em;
  ${'' /* right: 15px;
  bottom: 15px; */}
  text-align: center;
  overflow-y: scroll;
`;

const getNotification = (msgData, platform) => ({
  text: <Text data={{...msgData, platform: platform}} />,
  image: <Image message={{...msgData, platform: platform}} />,
  carousel: <Carousel carousel={msgData.carouselData} platform={platform} />,
  // error: <Error />,
});

export default function Chatbot({conversation, platform}) {

    return (
      <ChatContainer>
        {conversation.map(msgData => (
          <div>
            {getNotification(msgData, platform)[msgData.type]}
          </div>
        ))}
      </ChatContainer>
      );
}

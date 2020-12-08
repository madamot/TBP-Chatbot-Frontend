import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
import TextEdit from '../Text/TextEdit';
import Image from '../Image/Image';
import Carousel from '../Carousel/Carousel';
import Video from '../Video/Video';
import UserInput from '../UserInput/UserInput.js';
import Sound from '../Sound/Sound';

const ChatContainer = styled.div`
  width: 25em;
  ${'' /* position: absolute; */}
  height: 30em;
  ${'' /* right: 15px;
  bottom: 15px; */}
  ${'' /* text-align: center; */}
  overflow-y: scroll;
  background-color: ${({ platform }) => platform === 'teams' ? "#F3F2F1" : "#fff"};
`;

const getPreviewMessage = (msgData, platform) => ({
  text: <Text data={{...msgData, platform: platform}} />,
  image: <Image message={{...msgData, platform: platform}} />,
  carousel: <Carousel carousel={msgData.carouselData} platform={platform} />,
  sound: <Sound data={{...msgData, platform: platform}} />,
  video: <Video data={{...msgData, platform: platform}} />,
  // error: <Error />,
});

const getEditMessage = (msgData, platform) => ({
  text: <TextEdit data={{...msgData, platform: platform}} />,
  image: <Image message={{...msgData, platform: platform}} />,
  carousel: <Carousel carousel={msgData.carouselData} platform={platform} />,
  sound: <Sound data={{...msgData, platform: platform}} />,
  video: <Video data={{...msgData, platform: platform}} />,
  // error: <Error />,
});

export default function Chatbot({conversation, platform, addMessage, mode}) {

    const chatbotModeSwitch = (mode, msgData) => {
      switch(mode) {
        case 'preview':
          return getPreviewMessage(msgData, platform)[msgData.type];
        case 'edit':
          return getEditMessage(msgData, platform)[msgData.type];
        default:
          return 'foo';
      }
    }

    return (
      <div style={{
        width: "25em",
        border: "1px solid #0084ff"
      }}>
        <ChatContainer platform={platform}>
          {conversation.map(msgData => chatbotModeSwitch(mode, msgData))}
        </ChatContainer>
        <UserInput platform={platform} addMessage={addMessage} />
      </div>
      );
}

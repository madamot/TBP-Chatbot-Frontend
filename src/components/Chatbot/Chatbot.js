import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
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
  text-align: center;
  overflow-y: scroll;
  background-color: ${({ platform }) => platform === 'teams' ? "#F3F2F1" : "#fff"};
`;

const getMessage = (msgData, platform, addMessage) => ({
  text: <Text data={{...msgData, platform: platform}} addMessage={addMessage} />,
  image: <Image message={{...msgData, platform: platform}} />,
  carousel: <Carousel carousel={msgData.carouselData} platform={platform} />,
  sound: <Sound data={{...msgData, platform: platform}} />,
  video: <Video data={{...msgData, platform: platform}} />,
  // error: <Error />,
});

export default function Chatbot({conversation, platform, addMessage, QuickRepliesData}) {

    return (
      <div style={{
        width: "25em",
        border: "1px solid #0084ff"
      }}>
        <ChatContainer platform={platform}>
          {conversation.map(msgData => (
            <div>
              {getMessage(msgData, platform, addMessage)[msgData.type]}
            </div>
          ))}
        </ChatContainer>
        <UserInput platform={platform} addMessage={addMessage} QuickRepliesData={QuickRepliesData} />
      </div>
      );
}

import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
import Image from '../Image/Image';
import Carousel from '../Carousel/Carousel';

const ChatContainer = styled.div`
  width: 24%;
  position: absolute;
  border: 1px solid #0084ff;
  height: 400px;
  ${'' /* right: 15px;
  bottom: 15px; */}
  text-align: center;
  overflow-y: scroll;
`;

const getNotification = msgData => ({
  text: <Text data={{...msgData}} />,
  image: <Image message={{...msgData}} />,
  carousel: <Carousel carousel={msgData.carouselData} />,
  // error: <Error />,
});

export default function Chatbot({conversation}) {



  // function Notification({ status }) {
  //   return (
  //     <div>
  //       {NOTIFICATION_STATES[status]}
  //     </div>
  //   );
  // }

    return (
      <ChatContainer>
        {conversation.map(msgData => (
          <div>
            {getNotification(msgData)[msgData.type]}
          </div>
        ))}
      </ChatContainer>
      );
}

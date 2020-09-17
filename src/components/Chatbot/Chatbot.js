import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
import Image from '../Image/Image';


const getNotification = msgData => ({
  text: <Text data={{...msgData}} />,
  image: <Image message={{...msgData}} />,
  // warning: <Warning />,
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
      <>
        {conversation.map(msgData => (
          <div>
            {getNotification(msgData)[msgData.type]}
          </div>
        ))}
      </>
      );
}

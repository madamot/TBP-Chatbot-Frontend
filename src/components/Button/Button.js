import React from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text/Text';

export default function Button({ message }) {
  return (
    <div>
      <Text message={{...message, platform: 'messenger', author: message.author.BOT }} />
      Button
    </div>
  );
}

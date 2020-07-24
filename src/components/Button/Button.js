import React from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text/Text';

const Wrapper = styled.div`
  display: inline-block;
`;

const ButtonContainer = styled.div`
  display: flex;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
`;

const ButtonInner = styled.div`
  flex-grow: 1;
  width: 0;
  min-width: 80px;
  padding: 6px 12px 7px;
  font-size: 14px;
  max-width: 95%;
  border-radius: 30px;
  border-top-left-radius: 5px;
  border: 2px solid #eee;
  text-align: center;
  color: #0084ff;
  font-weight: bold;
  background: #fff;
`;

const TextButton = styled(Text)`
  border-bottom-left-radius: 5px;
`;


export default function Button({ message, button: { title } }) {
  return (
    <Wrapper>
      <TextButton message={{...message, platform: 'messenger', author: message.author.BOT }} />
      <ButtonContainer>
        <ButtonInner>{title}</ButtonInner>
      </ButtonContainer>
    </Wrapper>
  );
}

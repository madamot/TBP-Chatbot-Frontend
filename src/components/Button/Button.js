import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';

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

const Wrapper = styled.div`
  display: inline-block;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: ${({ author }) => author === 'user' ? "right" : "left"};

`;


export default function Button({ message, button: { title } }) {

  return (
    <Wrapper>
      <Text message={{...message, author: message.author.BOT }} />
      <ButtonContainer onClick={action('clicked')}>
        <ButtonInner>{title}</ButtonInner>
      </ButtonContainer>
    </Wrapper>
  );
}

import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';

const ButtonContainer = styled.div`
  display: flex;
  clear: both;
  ${'' /* margin-bottom: 2px; */}
  font-family: Helvetica, Arial, sans-serif;

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      ${'' /* padding-left: 1.6rem; */}
      ${'' /* transform: translateY(-35%); */}
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      ${'' /* background-color: #F3F2F1; */}
      color: #252423;
      margin-bottom: 0;
      min-width: 10.6rem;
    `}
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

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      flex-grow: 0;
      font-weight: normal;
      border-radius: 3px;
      border: 1px solid magenta;
      color: magenta;
      margin-top: .6rem;
    `}
`;

const Wrapper = styled.div`
  display: block;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: ${({ author }) => author === 'user' ? "right" : "left"};
`;

// const TextButton = styled(Text)`
//   border-bottom-left-radius: 5px;
// `;


export default function Button({ message, platform, button: { title } }) {

  return (
    <Wrapper>
      {/* <TextButton message={{...message, author: message.author.BOT }} /> */}
      <ButtonContainer platform={platform} onClick={action('clicked')}>
        <ButtonInner platform={platform}>{title}</ButtonInner>
      </ButtonContainer>
      {/* <ButtonContainer onClick={action('clicked')}>
        <ButtonInner>{title}</ButtonInner>
      </ButtonContainer> */}
    </Wrapper>
  );
}

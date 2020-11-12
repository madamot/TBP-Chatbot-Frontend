import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Text from '../Text/Text';
import "../../index.css"

const ButtonContainer = styled.div`
  display: flex;
  clear: both;
  margin-bottom: 0;
  color: #0084ff;
  ${'' /* border-radius: 30px; */}
  border: 1px solid #eee;
  font-family: Helvetica, Arial, sans-serif;
  background: #fff;


    ${({ platform }) =>
      platform === 'messenger' &&
      css`
      &:last-of-type {
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      `}



  ${({ platform }) =>
    platform === 'teams' &&
    css`
      ${'' /* padding-left: 1.6rem; */}
      ${'' /* transform: translateY(-35%); */}
      overflow: hidden;
      position: relative;
      ${'' /* background-color: #F3F2F1; */}
      color: #252423;
      margin: 5px 0px;
      border-radius: 3px;
      border: 1px solid magenta;
      background-color: #eee;
      min-width: 10.6rem;
    `}
`;

const ButtonInner = styled.div`
  flex-grow: 1;
  ${'' /* width: 100%; */}
  ${'' /* min-width: 80px; */}
  padding: 6px 12px 7px;
  font-size: 14px;
  ${'' /* max-width: 95%; */}
  text-align: center;
  font-weight: bold;


  ${({ platform }) =>
    platform === 'teams' &&
    css`
      flex-grow: 0;
      font-weight: normal;


      color: magenta;
      ${'' /* margin-top: .6rem; */}
    `}
`;

const Wrapper = styled.div`
  display: block;
  clear: both;
  font-family: Helvetica, Arial, sans-serif;
  ${'' /* float: ${({ author }) => author === 'user' ? "right" : "left"}; */}
`;

// const TextButton = styled(Text)`
//   border-bottom-left-radius: 5px;
// `;


export default function Button({ message, platform, buttons }) {

  return (
    <Wrapper>
      {buttons.map(button => (
        <ButtonContainer platform={platform} onClick={action('clicked')}>
          <ButtonInner platform={platform}>{button.title}</ButtonInner>
        </ButtonContainer>
      ))}

      {/* <ButtonContainer onClick={action('clicked')}>
        <ButtonInner>{title}</ButtonInner>
      </ButtonContainer> */}
    </Wrapper>
  );
}

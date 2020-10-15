import React from 'react';
import styled, { css } from 'styled-components';

const Message = styled.div`
  ${'' /* display: flex; */}
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: left;
  font-size: 14px;
  max-width: 70%;
  margin: 1px 0;
  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border-radius: 3px;
      padding: 0;
      overflow: hidden;
      position: relative;
      padding: 6px 12px 7px;
      background: #eee;
      color: #252423;
      margin-bottom: .6rem;
      min-width: 10.6rem;
    `}

  ${({ author, platform }) =>
    author === 'user' &&
    css`
      float: right;
      background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"};
      color: ${({ platform }) => platform === 'teams' ? "#252423" : "#fff"};
    `}
`;

const Picture = styled.img`
  position: relative;
  overflow: hidden;
  max-width: 100%;

  ${({ platform }) =>
    platform === 'messenger' &&
    css`
      border-radius: 30px;
      border: grey solid 1px;
    `}
`;

export default function Image({message:{ imgSrc, author, platform }}) {

  console.log(imgSrc);
    return (
      <Message author={author} platform={platform}>
        <div>
          <Picture src={imgSrc} platform={platform} />
        </div>
      </Message>
    );
}

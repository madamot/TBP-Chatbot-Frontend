import React from 'react';
import styled, { css } from 'styled-components';

import "../../index.css"

const Message = styled.div`
  display: flex;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: ${({ author }) => author === 'user' ? "right" : "left"};
`;

const MainMessage = styled.div`
  padding: 6px 12px 7px;
  font-size: 14px;
  max-width: 95%;
  margin: 1px 0;
  border-radius: 30px;
  background: #eee;

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      padding: .8rem 1.6rem .8rem 1.6rem;
      background-color: #F3F2F1;
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

const Meta = styled.div`
  display: ${({ platform }) => platform === 'teams' ? "flex" : "none"};
  flex-grow: 1;
  font-size: .8rem;
`;

export default function Text({ className, message: { id, title, platform, author, date, user }}) {
  return (
      <Message author={author}>
        <MainMessage className={className} platform={platform} author={author}>
          <Meta platform={platform}>
            {author} {date}
          </Meta>
          {title}
        </MainMessage>

      </Message>
  );
}

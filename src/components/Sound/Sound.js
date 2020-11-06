import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

const Message = styled.div`
  display: inline-block;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: left;
  font-size: 14px;
  ${'' /* max-width: 30%; */}
  ${'' /* min-width: 18rem; */}
  margin: 1px;
  font-size: 14px;
  border-radius: 30px;
  padding: 6px 12px 7px;
  background: #eee;
  border: 1px solid #eee;
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


export default function Sound({data:{ soundSrc, author, date, platform }}) {

    return (
      <Message author={author} platform={platform}>
        {platform}
        {author}
        {date}
        <audio id="player" src="vincent.mp3"></audio>
        <div>
          <button onclick="document.getElementById('player').play()">Play</button>
          <button onclick="document.getElementById('player').pause()">Pause</button>
          <button onclick="document.getElementById('player').volume += 0.1">Vol +</button>
          <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button>
        </div>
      </Message>
      );
}

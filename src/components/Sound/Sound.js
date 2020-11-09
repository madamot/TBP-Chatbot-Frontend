import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import AudioPlayer from 'react-modular-audio-player';

import play from "../../images/play.svg";
import playHover from "../../images/playHover.svg";
import './Sound.css';

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
      background: #fff;
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

const AudioContainer = styled.div`
  ${({ platform }) =>
    platform === 'teams' &&
    css`
    border: solid 1px #E7E6E5;
    border-radius: 3px;
    padding: 5px;
    background: #F3F2F1;
    margin: 3px;
    `}

`;

let teamsPlayer = [
  {
    className: "tier-top",
    style: {},
    innerComponents: [
      {
        type: "play",
        style: {width: "fit-content"}
      },
      {
        type: "seek"
      },
      {
        type: "time",
        style: {width: "fit-content"}
      },
    ]
  },
]

let messengerPlayer = [
  {
    className: "tier-top",
    style: {justifyContent: "space-between"},
    innerComponents: [
      {
        type: "play",
        style: {width: "fit-content"}
      },
      {
        type: "time",
        style: {width: "fit-content", float: "right"}
      },
    ]
  },
]

export default function Sound({data:{ soundSrc, author, date, platform }}) {

    return (
      <Message author={author} platform={platform}>
        <Meta platform={platform}>
          {author} {date}
        </Meta>
        <AudioContainer platform={platform}>
          {
            (platform === 'teams') ?
              <AudioPlayer
                rearrange={teamsPlayer}
                audioFiles={[{ src: soundSrc }]}
                playerWidth="10em"
                playIcon={play}
                playHoverIcon={playHover}
                sliderClass="invert-blue-grey"
                fontSize="1rem"
                iconSize="1.5rem"
              />

            : <AudioPlayer
              rearrange={messengerPlayer}
              audioFiles={[{ src: soundSrc }]}
              playerWidth="10em"
              playIcon={play}
              playHoverIcon={playHover}
              sliderClass="invert-blue-grey"
              fontSize="1rem"
              iconSize="1.5rem"
              />
          }
        </AudioContainer>
      </Message>
      );
}

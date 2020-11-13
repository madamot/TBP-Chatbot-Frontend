import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';


const QuickReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${'' /* clear: both; */}
  ${'' /* margin-bottom: 2px; */}
  font-family: Helvetica, Arial, sans-serif;

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      ${'' /* padding-left: 1.6rem; */}
      ${'' /* transform: translateY(-35%); */}
      border-radius: 3px;
      ${'' /* overflow: hidden; */}
      ${'' /* position: relative; */}
      ${'' /* background-color: none; */}
      color: #252423;
      margin-bottom: 0;
    ${'' /* min-width: 10.6rem;/ */}
    `}
`;

const Reply = styled.div`
  ${'' /* flex-grow: 1; */}
  ${'' /* width: 0; */}
  min-width: 80px;
  padding: 6px 6px 7px;
  margin: 2px;
  font-size: 14px;
  ${'' /* max-width: 95%; */}
  border-radius: 30px;
  border: 2px solid #eee;
  text-align: center;
  color: #0084ff;
  font-weight: bold;
  background: #fff;

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      font-weight: normal;
      border-radius: 3px;
      border: 1px solid magenta;
      color: magenta;
    `}
`;


export default function QuickReply({ QuickRepliesData, platform, addMessage, QuickRepliesData: { id, title }}) {

    return (
      <div style={{
        position: 'absolute',
        marginTop: '-40px',
        marginLeft: '40px'
      }}>
        <QuickReplyContainer>

          {QuickRepliesData.map(reply => (
            <Reply key={reply.id} platform={platform} onClick={() => addMessage(reply.title)}>{reply.title}</Reply>



            ))}
          </QuickReplyContainer>
      </div>
    );
}

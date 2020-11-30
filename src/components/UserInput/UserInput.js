import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  padding: 10px 0px;
  background: #E9E9E9;
  border-radius: 30px;
  border: none;
  outline: none;
  flex: 1 1 auto;
  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border: 2px solid #E1DEDD;
      box-sizing: border-box;
      border-radius: 5px;
      background: #FFF;
    `}
`

const Submit = styled.button`
  color: #373E4D;
  cursor: pointer;
  border: none;
  background-color: inherit;
  box-sizing: border-box;
  font-size: 1.5em;
  &:active {

  }
  ${({ platform }) =>
    platform === 'teams' &&
    css`
      color: #6265A7;
    `}
`

const Form = styled.form`
  background: #F5F2F1;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ platform }) =>
    platform === 'teams' &&
    css`
      background: #FFF;
    `}
`;


export default function UserInput({platform, addMessage, QuickRepliesData}) {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!message) return;
    addMessage(message);
    setMessage('');
  }

    return (
      <>
        <Form platform={platform} onSubmit={handleSubmit}>
          <Input type="title" name="name" platform={platform} value={message} onChange={e => setMessage(e.target.value)} />
          <Submit type="submit" value="Submit" platform={platform}>
            <FontAwesomeIcon icon={faPaperPlane} value="Submit" />
          </Submit>
        </Form>
      </>
    );
}

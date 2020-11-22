import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Text from '../components/Text/Text';

describe('Text Component', () => {
  test('Render a message from the bot in the Messenger platform', () => {
    const messageData = {
      id: '1',
      title: 'Hello World',
      platform: 'messenger',
      author: {
        BOT: 'bot',
        USER: 'user',
      },
      date: '14-07-20',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    };

    render(<Text data={{ ...messageData, author: messageData.author.BOT }} />);

    expect(screen.queryByText(/Hello World/)).toBeInTheDocument()
  });

  test('Render a message from the bot in the Teams platform', () => {
    const messageData = {
      id: '1',
      title: 'Hello World',
      platform: 'messenger',
      author: {
        BOT: 'bot',
        USER: 'user',
      },
      date: '14-07-20',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    };

    render(<Text data={{ ...messageData, platform: 'teams', author: messageData.author.BOT }} />);

    expect(screen.queryByText(/14-07-20/)).toBeInTheDocument()
    expect(screen.queryByText(/bot/)).toBeInTheDocument()
  });

  test('Render a message from the user in the Messenger platform', () => {
    const messageData = {
      id: '1',
      title: 'Hello World',
      platform: 'messenger',
      author: {
        BOT: 'bot',
        USER: 'user',
      },
      date: '14-07-20',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    };

    render(<Text data={{ ...messageData, author: messageData.author.USER }} />);

    expect(screen.queryByText(/Hello World/)).toBeInTheDocument()
  });

  test('Render a message from the user in the Teams platform', () => {
    const messageData = {
      id: '1',
      title: 'Hello World',
      platform: 'messenger',
      author: {
        BOT: 'bot',
        USER: 'user',
      },
      date: '14-07-20',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    };

    render(<Text data={{ ...messageData, platform: 'teams', author: messageData.author.USER }} />);

    expect(screen.queryByText(/14-07-20/)).toBeInTheDocument()
    expect(screen.queryByText(/user/)).toBeInTheDocument()
  });
});

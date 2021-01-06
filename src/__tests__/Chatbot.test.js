import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Chatbot from '../components/Chatbot/Chatbot';


jest.mock('axios');

describe('Chatbot', () => {
  test('fetches chat hisotry from API and displays them', async () => {
    const conversation = [
      {
        id: '1',
        type: 'text',
        title: 'Hello World!',
        platform: 'messenger',
        author: 'bot',
        date: '14-07-20',
        updatedAt: new Date(2018, 0, 1, 9, 0),
      },
    ];

    const promise = Promise.resolve({ data: conversation } );

    axios.get.mockImplementationOnce(() => promise);

    render(<Chatbot conversation={conversation} />);

    await act(() => promise);

    const helloWorld = await screen.findByText('Hello World!')

  });
});

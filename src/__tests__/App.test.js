import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

// jest.mock('axios');

describe('App', () => {
  test('renders chatbot component', () => {
    render(<App />);

    expect(screen.queryAllByText("Chatbot")).toBeTruthy()
  });

  test('renders existing messages', async () => {
    render(<App />);

    expect(screen.queryByText(/hello world/)).not.toBeInTheDocument()

    const helloWorld = screen.findAllByText('hello world')

    expect(await helloWorld).toHaveLength(2)
  });

  // test('fetches messages from an API and fails', async () => {
  //
  //   axios.get.mockImplementationOnce(() =>
  //     Promise.reject(new Error())
  //   );
  //
  //   render(<App />);
  //
  //   // await act(() => promise);
  //
  //   const message = await screen.findByText(/Something went wrong/);
  //
  //   expect(message).toBeInTheDocument();
  // });
})

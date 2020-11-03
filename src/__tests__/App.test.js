import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('renders chatbot component', () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText("Chatbot")).toBeTruthy()
  });
});

describe('Chatbot', () => {
  test('renders existing messages', async () => {
    const { findAllByText, queryByText } = render(<App />);

    expect(queryByText(/hello world/)).toBeNull();

    screen.debug();

    // expect(await findAllByText(/hello world/)).toBeInTheDocument();
    //
    // screen.debug();
  });
});

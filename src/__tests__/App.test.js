import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('renders chatbot component', () => {
    const { queryAllByText } = render(<App />)

    expect(queryAllByText("Chatbot")).toBeTruthy()
  })
})

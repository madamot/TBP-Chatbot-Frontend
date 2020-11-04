import React from 'react';
import { render, screen, within } from '@testing-library/react';

import App from '../App';

describe('Chatbot', () => {
  test('renders existing messages', async () => {
    const { queryByText, findAllByText } = render(<App />)

    expect(queryByText(/hello world/)).not.toBeInTheDocument()

    const helloWorld = findAllByText('hello world')

    expect(await helloWorld).toHaveLength(2)
  })
})


describe('App', () => {
  test('renders chatbot component', () => {
    const { queryAllByText } = render(<App />)

    expect(queryAllByText("Chatbot")).toBeTruthy()
  })
})

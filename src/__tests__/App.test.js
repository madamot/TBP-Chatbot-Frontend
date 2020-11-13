import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

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


  // test('fetches stories from an API and displays them', async () => {
  //   const stories = [
  //     { objectID: '1', title: 'Hello' },
  //     { objectID: '2', title: 'React' },
  //   ];
  //
  //   axios.get.mockImplementationOnce(() =>
  //     Promise.resolve({ data: { hits: stories } })
  //   );
  //
  //   render(<App />);
  //
  //   await userEvent.click(screen.getByRole('button'));
  //
  //   const items = await screen.findAllByRole('listitem');
  //
  //   expect(items).toHaveLength(2);
  // });
})

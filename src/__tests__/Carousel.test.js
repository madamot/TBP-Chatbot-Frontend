import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Carousel from '../components/Carousel/Carousel';

describe('Carousel', () => {
  test('renders carousel component, checking for the first and last card', () => {
    const carouselData = [
      {
        id: '1',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot',
        button: [
          {
            id: '1.1',
            title: 'my button',
          },
        ],
      },
      {
        id: '2',
        title: 'Hello everyone',
        subtitle: 'Look at this awesome picture',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot'
      },
      {
        id: '3',
        title: 'There are lots of carousels',
        subtitle: 'And lots of subtitles',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot',
        button: [
          {
            id: '3.1',
            title: 'my button',
          },
        ],
      },
      {
        id: '4',
        title: 'Last one',
        subtitle: 'and final',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot'
      },
    ];

    render(<Carousel carousel={carouselData} />);

    expect(screen.queryByText(/Title/)).toBeInTheDocument()
    expect(screen.queryByText(/Subtitle/)).toBeInTheDocument()

    expect(screen.queryByText(/Last one/)).toBeInTheDocument()
    expect(screen.queryByText(/and final/)).toBeInTheDocument()

  });

  test('renders carousel component, checking for buttons on the card', () => {
    const carouselData = [
      {
        id: '1',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot',
        button: [
          {
            id: '1.1',
            title: 'my button',
          },
        ],
      },
      {
        id: '2',
        title: 'Hello everyone',
        subtitle: 'Look at this awesome picture',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot'
      },
      {
        id: '3',
        title: 'There are lots of carousels',
        subtitle: 'And lots of subtitles',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot',
        button: [
          {
            id: '3.1',
            title: 'another clickable',
          },
        ],
      },
      {
        id: '4',
        title: 'Last one',
        subtitle: 'and final',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'messenger',
        date: '14-07-20',
        author: 'bot'
      },
    ];

    render(<Carousel carousel={carouselData} />);

    expect(screen.queryByText(/my button/)).toBeInTheDocument()
  });

  test('renders Teams carousel component, checking for the bot and date tags', () => {
    const carouselTeamsData = [
      {
        id: '1',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'teams',
        date: '14-07-20',
        author: 'bot',
        button: [
          {
            id: '1',
            title: 'my button',
          },
        ],
      },
      {
        id: '2',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'teams',
        date: '14-07-20',
        author: 'bot'
      },
      {
        id: '3',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'teams',
        date: '14-07-20',
        author: 'bot',
        button: [
          {
            id: '1',
            title: 'my button',
          },
        ],
      },
      {
        id: '4',
        title: 'Title',
        subtitle: 'Subtitle',
        imgSrc: require('../images/decepticons.jpg'),
        platform: 'teams',
        date: '14-07-20',
        author: 'bot'
      },
    ];

    render(<Carousel carousel={carouselTeamsData} platform='teams' />);

    const author = screen.queryAllByText(/bot/)
    const date = screen.queryAllByText(/14-07-20/)

    expect(author).toHaveLength(4)
    expect(date).toHaveLength(4)



  });


})

import React from 'react';

import Carousel from './Carousel';
import { Messenger_Button, Teams_Button } from '../Button/Button.stories';

export default {
  component: Carousel,
  title: 'Carousel',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const singleCarouselData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot'
  },
];

export const singleCarouselWithButtonData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot',
    button: [
      {
        id: '1',
        title: 'my button',
      },
      {
        id: '2',
        title: 'my button 2',
      },
    ],
  },
];

export const singleCarouselTeamsData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'teams',
    date: '14-07-20',
    author: 'bot',
  },
];

export const singleCarouselWithButtonTeamsData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
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
];

export const carouselData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
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
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot'
  },
  {
    id: '3',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
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
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot'
  },
];

export const carouselTeamsData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
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
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'teams',
    date: '14-07-20',
    author: 'bot'
  },
  {
    id: '3',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
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
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'teams',
    date: '14-07-20',
    author: 'bot'
  },
];

export const Messenger_Carousel_Single = () => (
  <Carousel carousel={singleCarouselData} />
);

export const Messenger_Carousel_Single_With_Button = () => (
  <Carousel carousel={singleCarouselWithButtonData} button={Messenger_Button} platform='messenger' />
);

export const Messenger_Carousel = () => (
  <Carousel carousel={carouselData} platform='messenger' />
);

export const Teams_Carousel_Single = () => (
  <Carousel carousel={singleCarouselTeamsData} platform='teams' />
);

export const Teams_Carousel_Single_With_Button = () => (
  <Carousel carousel={singleCarouselWithButtonTeamsData} button={Teams_Button} platform='teams' />
);

export const Teams_Carousel = () => (
  <Carousel carousel={carouselTeamsData} platform='teams' />
);

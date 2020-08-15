import React from 'react';

import Carousel from './Carousel';

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

export const singleCarouselTeamsData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'teams',
    author: 'bot'
  },
];

export const carouselData = [
  {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot'
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
    author: 'bot'
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

export const Messenger_Carousel_Single = () => (
  <Carousel carousel={singleCarouselData} />
);

export const Teams_Carousel_Single = () => (
  <Carousel carousel={singleCarouselTeamsData} />
);

export const Messenger_Carousel = () => (
  <Carousel carousel={carouselData} />
);

export const Teams_Carousel = () => (
  <Carousel carousel={carouselData} />
);

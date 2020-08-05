import React from 'react';

import Carousel from './Carousel';

export default {
  component: Carousel,
  title: 'Carousel',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const imageData = {
  id: '1',
  imgSrc: require('../../images/decepticons.jpg'),
  platform: 'messenger',
  author: {
    BOT: 'bot',
    USER: 'user',
  },
};

export const Messenger_Carousel = () => (
  <Carousel />
);

export const Teams_Carousel = () => (
  <Carousel />
);

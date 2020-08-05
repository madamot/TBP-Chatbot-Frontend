import React from 'react';

import Image from './Image';

export default {
  component: Image,
  title: 'Image',
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

export const Messenger_Image = () => (
  <Image message={{...imageData, author: imageData.author.BOT }} />
);

export const Teams_Image = () => (
  <Image message={{...imageData, author: imageData.author.BOT, platform: 'teams' }} />
);

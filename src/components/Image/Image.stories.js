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
};

export const Messenger_Image = () => (
  <Image message={imageData} />
);

export const Teams_Image = () => (
  <Image message={imageData} />
);

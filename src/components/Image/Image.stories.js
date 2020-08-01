import React from 'react';

import Image from './Image';

export default {
  component: Image,
  title: 'Image',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


export const Messenger_Image = () => (
  <Image />
);

export const Teams_Image = () => (
  <Image />
);

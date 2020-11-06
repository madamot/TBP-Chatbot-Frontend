import React from 'react';
import { action } from '@storybook/addon-actions';

import Sound from './Sound';

export const soundData = {
  id: '1',
  soundSrc: require('../../images/decepticons.jpg'),
  author: 'bot',
  date: '14-07-20',
};

export default {
  component: Sound,
  title: 'Sound',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Messenger_Sound = () => (
    <Sound data={{...soundData, platform: 'messenger' }} />
);

export const Teams_Sound = () => (
    <Sound data={{...soundData, platform: 'teams' }} />
);


import React from 'react';
import { action } from '@storybook/addon-actions';

import Video from './Video';

export const videoData = {
  id: '1',
  videoSrc: require('../../images/videoplayback.mp4'),
  author: 'bot',
  date: '14-07-20',
};

export default {
  component: Video,
  title: 'Video',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Messenger_Video = () => (
    <Video data={{...videoData, platform: 'messenger' }} />
);

export const Teams_Video = () => (
    <Video data={{...videoData, platform: 'teams' }} />
);

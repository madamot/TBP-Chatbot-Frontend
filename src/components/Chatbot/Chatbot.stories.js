import React from 'react';
import { action } from '@storybook/addon-actions';

import Chatbot from './Chatbot';

export default {
  component: Chatbot,
  title: 'Chatbot',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


export const Chatbot_container = () => (
  <>
    <Chatbot />
  </>
);

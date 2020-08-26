import React from 'react';
import { action } from '@storybook/addon-actions';

import App from '../../App';

import { buttonData } from '../Button/Button.stories';

export default {
  component: App,
  title: 'App',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Main_App = () => (
  <>
    <App />
  </>
);

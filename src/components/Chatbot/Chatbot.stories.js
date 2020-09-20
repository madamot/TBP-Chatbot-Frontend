import React from 'react';
import { action } from '@storybook/addon-actions';

import Chatbot from './Chatbot';

export default {
  component: Chatbot,
  title: 'Chatbot',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

// const Template = args => <Chatbot {...args} />;
//
// export const Default = Template.bind({});
// Default.args = [
//   {
//     id: '1',
//     type: 'text',
//     message: 'Hello World!',
//     platform: 'messenger',
//     author: 'bot',
//     date: '14-07-20',
//     updatedAt: new Date(2018, 0, 1, 9, 0),
//   },
//   {
//     id: '2',
//     type: 'text',
//     message: 'How are we?',
//     platform: 'messenger',
//     author: 'bot',
//     date: '14-07-20',
//     updatedAt: new Date(2018, 0, 1, 9, 0),
//     button: [
//       {
//         id: '1',
//         title: 'my button',
//       },
//     ],
//   },
//   {
//     id: '3',
//     type: 'image',
//     imgSrc: require('../../images/decepticons.jpg'),
//     platform: 'messenger',
//     author: 'bot',
//   },
//   {
//     id: '1',
//     type: 'carousel',
//     carouselData: [
//       {
//         id: '1',
//         title: 'Title',
//         subtitle: 'Subtitle',
//         imgSrc: require('../../images/decepticons.jpg'),
//         platform: 'messenger',
//         author: 'bot',
//         button: [
//           {
//             id: '1',
//             title: 'my button',
//           },
//         ],
//       },
//       {
//         id: '2',
//         title: 'Title',
//         subtitle: 'Subtitle',
//         imgSrc: require('../../images/decepticons.jpg'),
//         platform: 'messenger',
//         author: 'bot'
//       },
//       {
//         id: '3',
//         title: 'Title',
//         subtitle: 'Subtitle',
//         imgSrc: require('../../images/decepticons.jpg'),
//         platform: 'messenger',
//         author: 'bot',
//         button: [
//           {
//             id: '1',
//             title: 'my button',
//           },
//         ],
//       },
//       {
//         id: '4',
//         title: 'Title',
//         subtitle: 'Subtitle',
//         imgSrc: require('../../images/decepticons.jpg'),
//         platform: 'messenger',
//         author: 'bot'
//       },
//     ]
//   }
// ];

const conversation = [
  {
    id: '1',
    type: 'text',
    message: 'Hello World!',
    platform: 'messenger',
    author: 'bot',
    date: '14-07-20',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  {
    id: '2',
    type: 'text',
    message: 'How are we?',
    platform: 'messenger',
    author: 'bot',
    date: '14-07-20',
    updatedAt: new Date(2018, 0, 1, 9, 0),
    button: [
      {
        id: '1',
        title: 'my button',
      },
    ],
  },
  {
    id: '3',
    type: 'image',
    imgSrc: require('../../images/decepticons.jpg'),
    platform: 'messenger',
    author: 'bot',
  },
  {
    id: '1',
    type: 'carousel',
    carouselData: [
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
    ]
  }
];


export const Messenger_Chatbot = () => (
  <>
    <Chatbot conversation={conversation} />
  </>
);

export const Teams_Chatbot = () => (
  <>
    <Chatbot conversation={conversation} platform='teams' />
  </>
);

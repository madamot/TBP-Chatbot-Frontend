import React, { useState } from 'react';

import ChatbotViews from './components/ChatbotViews/ChatbotViews.js';
import UserInput from './components/UserInput/UserInput.js';

import './App.css';

function App() {
  const [convo, setConvo] = useState([
    {
      id: '1',
      type: 'text',
      title: 'Hello World!',
      platform: 'messenger',
      author: 'bot',
      date: '14-07-20',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    },
    {
      id: '2',
      type: 'text',
      title: 'How are we?',
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
      imgSrc: require('./images/decepticons.jpg'),
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
          imgSrc: require('./images/decepticons.jpg'),
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
          imgSrc: require('./images/decepticons.jpg'),
          platform: 'messenger',
          author: 'bot'
        },
        {
          id: '3',
          title: 'Title',
          subtitle: 'Subtitle',
          imgSrc: require('./images/decepticons.jpg'),
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
          imgSrc: require('./images/decepticons.jpg'),
          platform: 'messenger',
          author: 'bot'
        },
      ]
    }
  ]);

  const addMessage = text => {
    const newConvo = [...convo, {
      id: '1',
      type: 'text',
      title: text,
      author: 'user',
      date: '14-07-20',
      updatedAt: new Date(2018, 0, 1, 9, 0),
    },];
    setConvo(newConvo);
  }


  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ChatbotViews addMessage={addMessage} conversation={convo} />
        {convo.map(msg => (
          console.log(msg)
        ))}
      </div>
    </div>
  );
}

export default App;

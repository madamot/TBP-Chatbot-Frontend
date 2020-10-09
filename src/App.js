import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ChatbotViews from './components/ChatbotViews/ChatbotViews.js';
import UserInput from './components/UserInput/UserInput.js';

import './App.css';

function App() {
  const [convo, setConvo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/api/chat/',
      );

      setConvo(result.data);
    };

    fetchData();
  }, []);

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

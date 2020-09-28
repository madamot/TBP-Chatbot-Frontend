import React from 'react';

import ChatbotViews from './components/ChatbotViews/ChatbotViews.js';
import UserInput from './components/UserInput/UserInput.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ChatbotViews />
      </div>
    </div>
  );
}

export default App;

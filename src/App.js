import React from 'react';
import Chatbot from 'react-chatbot-kit';

import messengerConfig from "./messengerChatbot/config";
import messengerActionProvider from "./messengerChatbot/ActionProvider";
import messengerMessageParser from "./messengerChatbot/MessageParser";

import teamsConfig from "./teamsChatbot/config";
import teamsActionProvider from "./teamsChatbot/ActionProvider";
import teamsMessageParser from "./teamsChatbot/MessageParser";

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chatbot config={messengerConfig} actionProvider={messengerActionProvider} messageParser={messengerMessageParser} />
        <Chatbot config={teamsConfig} actionProvider={teamsActionProvider} messageParser={teamsMessageParser} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import ChatList from './chatList';
import ChatRoom from './chatRoom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatList/>
  </React.StrictMode>
);


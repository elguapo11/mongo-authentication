import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Posts from './getPosts.jsx';
import Create from './createPosts.jsx';
import Login from './login.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Posts />
    <Create />
  </React.StrictMode>
);

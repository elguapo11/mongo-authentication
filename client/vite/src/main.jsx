import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Posts from './getPosts.jsx'
import Create from './createPosts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Posts />
    <Create />
    
  </React.StrictMode>,
)


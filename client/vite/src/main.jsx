import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ChessBoard from './chessDisplay'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ChessBoard />
  </React.StrictMode>,
)

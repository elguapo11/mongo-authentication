import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Page from './Pages/Page';
import { Link, Routes, BrowserRouter as Router } from 'react-router-dom';

import { show, display } from '../../../server/react';

function App() {
  return (
    <>
      <h2>Hello World</h2>
      <Page />
    </>
  );
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Page from './Page';
import { Link, Routes, BrowserRouter as Router } from 'react-router-dom';

import { show, display } from '../../../server/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <h2>
        <Link>Hello World</Link>
      </h2>
      <Routes element={<Page />}></Routes>
    </Router>
  );
}

export default App;

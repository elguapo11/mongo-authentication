import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
 
  <header>
      <div className="container">
        <h2>My own site</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
        
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
</header>
  );
}

export default App;

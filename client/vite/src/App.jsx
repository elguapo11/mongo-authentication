import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
 
  <header>
      <div className="left-nav-bar-text">
        <h3>My first navbar</h3>
      </div>
      <div className="container">

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <h2></h2>
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

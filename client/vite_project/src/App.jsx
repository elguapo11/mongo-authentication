import { useState } from 'react'



import './App.css'
import './main.html'
import { createHtmlPlugin } from 'vite-plugin-html'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
       
      </div>
      <h1>My testing site for Mongo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Every time you click you wish me success {count}
        </button>
        <p>
          Me testing things out
        </p>
      </div>


    </div>
  )
}

export default App

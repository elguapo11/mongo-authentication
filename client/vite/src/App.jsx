import { Component, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { show , display} from '../../../server/react'
import axios from 'axios'; // Import axios for making HTTP requests



function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts when the component mounts
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts/get');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{display()}</h1>
      <h1>{show('hello')}</h1>
      <h1>Vite + React</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.Title}</h2>
          </div>
        ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import axios from 'axios';
import { useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState(null);

  const getAllPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts/get');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleButtonClick = () => {
    // Fetch posts when the button is clicked
    getAllPosts();
  };

  return (
    <div className="posts">
      <button onClick={handleButtonClick}>Fetch Posts</button>
      {posts && ( //this is brilliant, will check if posts is truthy before running
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.Title}</h2>
            <h6>{post.Tag}</h6>
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;

import axios from 'axios';
import { useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState(null);

  const getAllPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts/get');
      console.log('posts have been fetched')
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
            <h2>Title: {post.Title}</h2>
            <h4>Content: {post.Content}</h4>
            <h4>Tag: {post.Tag}</h4>
            <h6>Id: {post._id}</h6>
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;

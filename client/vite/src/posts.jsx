import axios from 'axios'; // Import axios for making HTTP requests
import { useState, useEffect } from 'react'


function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      // Fetch all posts when the component mounts
      const getAllPosts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/posts/get');
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      getAllPosts();
    }, []);

    return (

        <div className="posts">
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.Title}</h2>
            <h6>{post.Tag}</h6>
          </div>
        ))}
      </div>
    )
}

    export default Posts
import axios from 'axios';
import { useState, useEffect } from 'react';
import EditPost from './editPost';

function Posts() {
  const [posts, setPosts] = useState(null);
  const [originalPosts, setOriginalPosts] = useState(null);
  const [editedPosts, setEditedPosts] = useState([]);

  useEffect(() => {
    // getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts/get');
      setPosts(response.data);
      setOriginalPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const getPostsClick = () => {
    getAllPosts();
  };

  const clearPostsClick = () => {
    window.location.reload();
  };

  const handleEdit = async (postId, updatedContent) => {
    try {
      // Find the original post to compare
      const originalPost = originalPosts.find((post) => post._id === postId);

      // Check if the content has changed
      if (originalPost.Content !== updatedContent) {
        // Call your API endpoint to update the post
        await axios.put(`http://localhost:3000/posts/update/${postId}`, {
          Content: updatedContent,
        });

        console.log(`Post with ID ${postId} has been updated`);
        // Optionally, you can fetch the posts again after updating
        getAllPosts();

        // Set the post as edited
        setEditedPosts((prevEditedPosts) => [...prevEditedPosts, postId]);
      } else {
        console.log(`No changes detected for post with ID ${postId}`);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async (post_Id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/delete/${post_Id}`);
      console.log(`Post with ID ${post_Id} deleted successfully.`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className='posts'>
      <button onClick={getPostsClick}>Fetch Posts</button>
      <button onClick={clearPostsClick}>Clear Posts</button>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div className='fetch_posts' key={post._id}>
            <h4 className='title'>Title: {post.Title}</h4>
            <h2 className='content'>Content: {post.Content}</h2>
            <h6 className='created at'> Created at: {post.createdAt}</h6>
            {editedPosts.includes(post._id) && (
              <h6 className='updated at'> Updated at: {post.updatedAt}</h6>
            )}
            <button
              className='deleteButton'
              onClick={() => handleDelete(post._id)}
            >
              Delete Post
            </button>
            <EditPost postId={post._id} handleEdit={handleEdit} />
            <br></br>
          </div>
        ))
      ) : (
        <p>{posts ? 'No posts available. Create your first post!' : ''}</p>
      )}
      <br></br>
    </div>
  );
}

export default Posts;

import axios from 'axios';
import { useState } from 'react';
import EditPost from './editPost';

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

  const getPostsClick = () => {
    // Fetch posts when the button is clicked
    getAllPosts();
    if (posts === null) {
      console.log('no posts available');
    }
  };
  const clearPostsClick = () => {
    // Clear posts when the button is clicked
    console.log('posts have been cleared');
    window.location.reload();
  };
  const handleEdit = async (postId, updatedContent) => {
    try {
      // Call your API endpoint to update the post
      await axios.put(`http://localhost:3000/posts/update/${postId}`, {
        Content: updatedContent,
      });

      console.log(`Post with ID ${postId} has been updated`);
      // Optionally, you can fetch the posts again after updating
      getAllPosts();
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
            <h6 className='created at'> Updated at: {post.updatedAt}</h6>
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
        //It checks if posts is not null (indicating that the fetch operation has been performed) and the length is 0. If both conditions are true, it displays the message. Otherwise, it displays an empty string,
        //effectively hiding the message when there are posts.
      )}
      <br></br>
    </div>
  );
}

export default Posts;

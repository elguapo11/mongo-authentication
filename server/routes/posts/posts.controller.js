function postController_injector($inject) {
  const Post = require('../../models/posts');
  const controller = {
    getPost,
    createPost,
    updatePost,
    deletePost,
  };
  return controller;

  async function getPost(req, res, next) {
    try {
      // Fetch all posts from the database
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  async function createPost(req, res, next) {
    try {
      // Create a new post using data from the request body
      const newPost = new Post(req.body);
      await newPost.save();
      console.log(newPost);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  async function updatePost(req, res, next) {
    res.status(200).send('You have updated a post');
  }
  async function deletePost(req, res, next) {
    res.status(200).send('Your post has been deleted');
  }
}

module.exports = postController_injector;

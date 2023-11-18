function postController_injector($inject) {
  const Post = require('../../models/posts');
  const controller = {
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
  };
  return controller;

  async function getAllPosts(req, res, next) {
    try {
      // Fetch all posts from the database
      const posts = await Post.find();
      console.log(posts);
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
    try {
      // Update the post with the specified ID using data from the request body
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      console.log(`Post Number ` + req.params.id + `has been updated`);
      res.status(200).json(`Post Number ` + req.params.id + `has been updated`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  async function deletePost(req, res, next) {
    try {
      // Delete the post with the specified ID
      await Post.findByIdAndDelete(req.params.id);
      console.log('Post Number ' + req.params.id + `Has Been Deleted`);
      res.status(200).send('Post Number ' + req.params.id + `Has Been Deleted`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = postController_injector;

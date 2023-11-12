function postController_injector($inject) {
  const controller = {
    getPost,
    createPost,
    updatePost,
    deletePost,
  };
  return controller;

  async function getPost(req, res, next) {
    res.status(200).send(`Retrieving post`);
  }
  async function createPost(req, res, next) {
    res.status(200).send('You have created a post');
  }
  async function updatePost(req, res, next) {
    res.status(200).send('You have updated a post');
  }
  async function deletePost(req, res, next) {
    res.status(200).send('Your post has been deleted');
  }
}

module.exports = postController_injector;

function postsRoutes_injector($inject) {
  const { postController, router } = $inject;

  router.route('/posts').get(postController.getPost);
  router.route('/posts/create').post(postController.createPost);
  router.route('/posts/update').put(postController.updatePost);
  router.route('/posts/delete').delete(postController.deletePost);

  return router;
}

module.exports = postsRoutes_injector;

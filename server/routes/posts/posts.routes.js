function postsRoutes_injector($inject) {
  const { postController, router } = $inject;

  router.route('/posts/get').get(postController.getAllPosts);
  router.route('/posts/create').post(postController.createPost);
  router.route('/posts/update/:id').put(postController.updatePost);
  router.route('/posts/delete/:id').delete(postController.deletePost);
  router.route('/posts/modify/:number').post(postController.modifyNumber);

  return router;
}

module.exports = postsRoutes_injector;

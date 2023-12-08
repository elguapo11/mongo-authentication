const Post = require('../../models/posts');

//controller

const $inject_controller = { Post };
const postController = require('./posts.controller')($inject_controller);

//Routes
const $inject_routes = {
  postController: postController,
  router: require('express').Router(),
  Post,
};
const postRoutes = require('./posts.routes')($inject_routes);

module.exports = postRoutes;

//controller
const $inject_controller = {};
const postController = require('./posts.controller')($inject_controller);

//Routes
const $inject_routes = {
  postController: postController,
  router: require('express').Router(),
};
const postRoutes = require('./posts.routes')($inject_routes);

module.exports = postRoutes;

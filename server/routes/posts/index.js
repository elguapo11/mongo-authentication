//controller
const Post = require('../../../models/posts');
const postController = require('./posts.controller')($inject_controller);
const $inject_controller = { Post };
const mongoose = require('mongoose'); // Add this line for Mongoose

//Routes
const $inject_routes = {
  postController: postController,
  router: require('express').Router(),
  Post,
};
const postRoutes = require('./posts.routes')($inject_routes);

module.exports = postRoutes;

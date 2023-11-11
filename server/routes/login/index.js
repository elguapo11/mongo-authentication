//controller
const $inject_controller = {};

const loginController = require('./login.controller')($inject_controller);

//Routes
const $inject_routes = {
  loginController: loginController,
  router: require('express').Router(),
};
const loginRoutes = require('./login.routes')($inject_routes);

module.exports = loginRoutes;

/**
 * @param {object} $inject - Dependencies
 * @param {*} $inject.router
 * @param {*} $inject.loginController

 */

function loginRoutes_injector($inject) {
  const { loginController, router } = $inject;

  router.route('/login').post(loginController.login);
  router.route('/logout').get(loginController.logout);

  return router;
}

module.exports = loginRoutes_injector;

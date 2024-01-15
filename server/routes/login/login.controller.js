const { getUsers } = require('../../users');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SimpleCrypto = require('simple-crypto-js').default;
const { SECRETKEY } = process.env;
const simpleCrypto = new SimpleCrypto({ SECRETKEY });

function loginController_injector($inject) {
  const controller = {
    login,
    logout,
  };
  return controller;

  async function login(req, res, next) {
    const { username, password } = req.body;
    const users = getUsers(); // Get users from the external file

    const user = users.find((u) => u.username === username);

    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ message: 'Incorrect username or password' });
    }
    // If the user is found and the password is correct, generate a JWT
    const token = jwt.sign({ userId: user.id }, SECRETKEY, { expiresIn: '1h' });

    res.json({
      message: `Welcome ${username}, Your Authentication was successful`,
      token,
    });
    console.log('Presented Token ' + token);
  }

  async function logout(req, res, next) {
    req.session = null;
    res.send('logged out');
  }
}

module.exports = loginController_injector;

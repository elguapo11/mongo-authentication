const { getUsers } = require('../server/users');
const jwt = require('jsonwebtoken');
const { SECRETKEY } = process.env;
const SimpleCrypto = require('simple-crypto-js').default;
const simpleCrypto = new SimpleCrypto(SECRETKEY);

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const users = getUsers(); // Get users from the external file

    const user = users.find((u) => u.username === username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // If the user is found and the password is correct, generate a JWT
    const token = jwt.sign({ userId: user.id }, SECRETKEY, { expiresIn: '1h' });

    res.json({
      message: `Welcome ${username}, Your Authentication was successful`,
      token,
    });
    console.log('Presented Token');
  },
};

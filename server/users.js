const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, 'users.json');

function getUsers() {
  const userData = fs.readFileSync(userFilePath, 'utf8');
  return JSON.parse(userData);
}

module.exports = {
  getUsers,
};

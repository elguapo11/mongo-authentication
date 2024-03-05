// Load the File System module
const fs = require('fs');

// Data you want to write to the file
const data = 'Hello, this is a test file created by Node.js!';

// The path and name of the file you want to create/overwrite
const filename = 'example.txt';

// Use writeFile() to write data to a file
// The parameters are the file name, the data, and the callback function
fs.writeFile(filename, data, (err) => {
  if (err) {
    console.error('There was an error writing to the file:', err);
  } else {
    console.log('File written successfully!');
  }
});

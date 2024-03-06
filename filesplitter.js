const fs = require('fs');
const path = require('path');

// Check for proper command line arguments
if (process.argv.length !== 4) {
  console.log(
    'Usage: node splitFile.js <file-to-split.txt> <number-of-output-files>'
  );
  process.exit(1);
}

const inputFile = process.argv[2];
const numberOfFiles = parseInt(process.argv[3], 10);

// Validate the number of files
if (isNaN(numberOfFiles) || numberOfFiles < 1) {
  console.log('Please provide a valid number of files to split into.');
  process.exit(1);
}

// Function to split and create files
const splitFile = (inputFile, numberOfFiles) => {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${inputFile}`);
      process.exit(1);
    }

    // Split the file content by lines
    const lines = data.split(/\r?\n/);

    // Calculate the number of lines per file
    const linesPerFile = Math.ceil(lines.length / numberOfFiles);

    for (let i = 0; i < numberOfFiles; i++) {
      // Determine the slice of lines for this file
      const startLine = i * linesPerFile;
      const endLine = startLine + linesPerFile;
      const fileContent = lines.slice(startLine, endLine).join('\n');

      // Create a file name based on the original name and the split index
      const outputFile = `${path.basename(inputFile, '.txt')}_part${i + 1}.txt`;

      // Write the sliced content to a new file
      fs.writeFile(outputFile, fileContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file: ${outputFile}`);
          return;
        }
        console.log(`File ${outputFile} has been created.`);
      });
    }
  });
};

// Invoke the function
splitFile(inputFile, numberOfFiles);

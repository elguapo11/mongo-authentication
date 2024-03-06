// Import necessary modules
const fs = require('fs');
const readline = require('readline');
const path = require('/Users/bennymendoza/Documents/coding_projects/mongo-authentication/100-stdout-stderr.txt');

// Check for the correct number of arguments
if (process.argv.length !== 4) {
  console.log('Usage: node splitTextFile.js <file path> <lines per split>');
  process.exit(1);
}

// Extract arguments
const filePath = process.argv[2];
const linesPerSplit = parseInt(process.argv[3], 10);

// Validate linesPerSplit
if (isNaN(linesPerSplit) || linesPerSplit <= 0) {
  console.log('Please provide a valid number of lines per split.');
  process.exit(1);
}

// Function to split the file
async function splitFile(filePath, linesPerSplit) {
  try {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let lineCount = 0;
    let fileCount = 1;
    let outputLines = [];

    for await (const line of rl) {
      outputLines.push(line);
      lineCount++;

      if (lineCount === linesPerSplit) {
        const outputFilePath = `${path.basename(
          filePath,
          '.txt'
        )}_part${fileCount}.txt`;
        fs.writeFileSync(outputFilePath, outputLines.join('\n'));
        console.log(`Written ${outputFilePath}`);

        // Reset for the next file
        lineCount = 0;
        fileCount++;
        outputLines = [];
      }
    }

    // Check for any remaining lines that didn't make a full set
    if (outputLines.length > 0) {
      const outputFilePath = `${path.basename(
        filePath,
        '.txt'
      )}_part${fileCount}.txt`;
      fs.writeFileSync(outputFilePath, outputLines.join('\n'));
      console.log(`Written ${outputFilePath}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Execute the function
splitFile(filePath, linesPerSplit);

```javascript
const fs = require('fs');

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function processFile() {
  try {
    const data = await readFileAsync('./my-file.txt');
    // Process the data
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
    // Handle the error appropriately (e.g., retry, log, fallback)
  }
}

processFile();
```
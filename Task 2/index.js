const fs = require('fs/promises');

async function readFiles() {
  try {
    const fileNames = ['a.txt', 'b.txt', 'c.txt'];
    let totalLength = 0;

    for (const name of fileNames) {
      const content = await fs.readFile(name, 'utf-8');
      console.log(`Content of ${name}:`);
      console.log(content);
     console.log('\n'); 

      totalLength += content.length;
    }

    console.log(`Total number of characters: ${totalLength}`);
  } catch (error) {
    console.error('Error reading files:', error.message);
  }
}

readFiles();

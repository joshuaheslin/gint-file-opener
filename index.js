const open = require('open');
const fs = require('fs');
const readline = require('readline');

const testFolder = './';

const run = async () => {
  console.log('Running...');

  fs.readdir(testFolder, async (err, files) => {
    if (err) {
      console.error(err)
      throw new Error(err)
    }

    console.log(`Found ${files.length} files.`)
    console.log(files)

    try {
      for(const file of files) {
        if (file.includes('.gsc')){
          console.log(`Opening ${file}...`)
          await open(testFolder + file, { wait: true });
          console.log('Done')
        } else {
          console.log(`Skipping: ${file}. Wrong file type found. Only supports '.gsc'`)
        }
      }
    } catch (err) {
      console.log(err);
    }
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question('Select enter to close the window.', (answer) => {
      rl.close();
    })
  });
};

run();


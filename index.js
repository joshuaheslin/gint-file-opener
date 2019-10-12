const open = require('open');
const fs = require('fs');

const testFolder = './files/';

const run = async () => {
  console.log('Running...');

  fs.readdirSync(testFolder).map(async file => {
    try {
      console.log(file);
      await open("./files/" + file);
    } catch (err) {
      console.log(err);
    }
  });

  console.log('Stopped');
};

run();

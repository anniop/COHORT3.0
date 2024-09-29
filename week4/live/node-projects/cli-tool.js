const fs = require("fs");
const { Command, program } = require("commander");
const { log } = require("console");
const aniket = new Command(); // created an object of the class command.

aniket
  .name("Counter")
  .description("CLI to do file based tasks")
  .version('0.8.0');

aniket.command('count')
  .description("Count the number of lines in a file")
  .argument('<file>','file to count')
  .action((file) => {
    fs.readFile(file,'utf8',(err,data) => {
      if(err) {
        log(err);
      } else {
        const lines = data.split('\n').length;
        log(`There are ${lines} lines in ${file}`)
      }
    });
  });

  aniket.command('list')
  .description("List all files in a directory")
  .argument('<directory>', 'directory to list files from')
  .action((directory) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        log(err);
      } else {
        if (files.length === 0) {
          log(`No files found in ${directory}`);
        } else {
          log(`Files in ${directory}:`);
          files.forEach(file => log(file));
        }
      }
    });
  });

  aniket.command('letter')
  .description("Counts the letters in a file")
  .argument('<letter>','reads the file')
  .action((fileName) => {
    fs.readFile(fileName,"utf-8",function(err,data) {
      if(err) {
          console.log("Error File Not Fouund");
      } else {
        const letter = data.split(' ').length;
        log(`the letters in the ${fileName} is ${letter}`);
      }
  });
  });
aniket.parse();
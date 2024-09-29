const fs = require("fs");
const { Command, program } = require("commander");
const { log } = require("console");
const aniket = new Command()

aniket
    .name("Listing Files")
    .description("This Program is used to list the files")
    .version("1.0.0");

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

  aniket.parse();
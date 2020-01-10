const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require("colors/safe");
const path = require('path')

// Set prompt as green and use the "Replace" text
prompt.message = colors.green("Replace");

module.exports = (args, options, logger) => {
  const templatePath = path.join(__dirname, '..', 'templates/api');
  const localPath =  path.join(process.cwd(), args.folder);
  /*
   * Copy Template
   */

  if (!fs.existsSync(localPath)){
    fs.mkdirSync(localPath);
  }

  logger.info('Copying files…');
  shell.cp('-R', `${templatePath}/*`, localPath);
  logger.info('✔ The files have been copied!');

  /*
   * File variables
   */

  const variables = require(`${templatePath}/_variables`);

  // Remove variables file from the current directory
  // since it only is needed on the template directory
  if (fs.existsSync(`${localPath}/_variables.js`)) {
    shell.rm(`${localPath}/_variables.js`);
  }

  logger.info('Please fill the following values…');

  // Ask for variable values
  prompt.start().get(variables, (err, result) => {

    // Remove MIT License file if another is selected
    if (result.license !== 'MIT') {
      shell.rm(`${localPath}/LICENSE`);
    }

    // Replace variable values in all files
    shell.ls('-Rl', '.').forEach(entry => {
      if (entry.isFile()) {
        // Replace '[VARIABLE]` with the corresponding variable value from the prompt
        variables.forEach(variable => {
          shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name);
        });

        // Insert current year in files
        shell.sed('-i', '\\[YEAR\\]', new Date().getFullYear(), entry.name);
      }
    });

    logger.info('✔ Success!');
  });
}


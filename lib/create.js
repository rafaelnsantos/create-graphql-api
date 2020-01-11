const shell = require('shelljs');
const fs = require('fs');
const path = require('path')

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
  logger.info('✔ Success!');
}

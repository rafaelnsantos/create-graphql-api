const shell = require('shelljs');
const fs = require('fs');
const path = require('path')

const defaultTemplate = 'default'

module.exports = (args, options, logger) => {
  if (!options.template) {
    options.template = defaultTemplate
  }

  const templatePath = path.join(__dirname, '..', 'templates', options.template);
  const localPath =  path.join(process.cwd(), args.folder);

  if (fs.existsSync(templatePath)) {

    if (!fs.existsSync(localPath)){
      fs.mkdirSync(localPath);
    }

    logger.info('Copying files…');
    shell.cp('-R', `${templatePath}/*`, localPath);
    shell.cp('-R', `${templatePath}/.*`, localPath);
    logger.info('✔ Success!');
  } else {
    logger.error(`The requested template for ${options.template} wasn't found. (default or clean)`)
    process.exit(1);
  }
  
}

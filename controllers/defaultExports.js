const fs = require('fs');
const path = require('path');

const defaultExports = async (req, res) => {
    const operationFile = fs.readFileSync(path.join(__dirname, '../CommonJSModuleExports/DefaultExports/export.js'), 'utf8');
    const mainFile = fs.readFileSync(path.join(__dirname, '../CommonJSModuleExports/DefaultExports/import.js'), 'utf8');
    res.send({ operationFile, mainFile });

};

module.exports = defaultExports ;

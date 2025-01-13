const fs = require('fs');
const path = require('path');

const namedExports = async (req, res) => {
    const operationFile = fs.readFileSync(path.join(__dirname, '../CommonJSModuleExports/NamedExports/export.js'), 'utf8');
    const mainFile = fs.readFileSync(path.join(__dirname, '../CommonJSModuleExports/NamedExports/import.js'), 'utf8');
    res.send({ operationFile, mainFile });
};

module.exports = namedExports;

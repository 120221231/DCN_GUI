const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
jest
    .dontMock('fs');
global.document = html.innerHTML;
const fs = require('fs');
const path = require('path');
const pathName = path.join(__dirname, 'files', 'lorem.txt');
const newPathName = path.join(__dirname, 'files', 'newLorem.txt');
const rs = fs.createReadStream(pathName, { encoding: 'utf-8' });
const ws = fs.createWriteStream(newPathName);

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })
// Even more efficient way

rs.pipe(ws);
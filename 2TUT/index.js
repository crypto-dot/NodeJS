const fsPromises = require('fs').promises;
const path = require('path');

const func = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'reply.txt'), 'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'reply.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n \n Nice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'replyEdit.txt'));
    } catch (err) {
        console.error(err);
    }
}
func();
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
//     if (err) throw err;
//     console.log('operation write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'I was appended', (err) => {
//         if (err) throw err;
//         console.log('operation append complete');
//     });
//     fs.readFile(path.join(__dirname, 'files', 'reply.txt'), 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data.toString());
//     });

// });

process.on('uncaughtException', err => {
    console.error(`There was an uncaught exception ${err}`);
    process.exit(1);
});
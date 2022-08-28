const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log(
            'Directory created'
        );
    });
} else {
    console.log('Sorry the directory already exists');
}

process.on('uncaughtException', (err) => {
    console.error(err);
})
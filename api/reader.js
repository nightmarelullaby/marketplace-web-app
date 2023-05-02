var fs = require('fs');

fs.readFile(path, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`file read complete, data: ${data}`);
    }
});


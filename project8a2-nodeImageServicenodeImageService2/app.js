
module.exports = function (app) {
    const multer = require('multer');
    const upload = multer({ dest: __dirname + '/../../public/uploads'});

    app.post("")
}

const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => console.log(`server started on port ${port}`))
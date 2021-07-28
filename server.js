/**
 * require
 */
const express = require('express');
const path = require('path');
const ngApp = express();

/**
 * connected with the project
 */
ngApp.use(express.static('./dist'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/index.html'));
});

/**
 * server will listen on given or default port
 */
ngApp.listen(process.env.PORT || 8080);
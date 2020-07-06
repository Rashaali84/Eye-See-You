const express = require('express');

const app = express();

/**
* Just a simple test endpoint to demo how to test with Jest
**/
app.get('/test', function (req, res) {
    res.send('Welcome Test!');
});

module.exports = app;
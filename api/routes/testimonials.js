const express = require('express');

const app = express();
const handlers = require('./controllers');

/**
* Just a simple test endpoint to demo how to test with Jest
**/
//router.get('/services', controllers.getServices);

app.get('/testmonials', handlers.getTestmonials);
app.post('/testmonials', handlers.postTestmonials);


module.exports = app;
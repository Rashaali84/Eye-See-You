// this file allows you to develop/test your api without the frontend

const express = require('express');
const devServer = express();
const api = require('./server.js');
const path = require('path');


devServer.use((req, res, next) => {
  console.log(req.method + ': ' + req.path);
  next();
});

devServer.use('/api', api);


// this line to serve css and html files
devServer.use(express.static(path.join(__dirname, '../client/public')));
devServer.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
  //res.send('frontend');
});


const port = 5000;
devServer.listen(port, () => console.log(`listening at http://localhost:${port}`));

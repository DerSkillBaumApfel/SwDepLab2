'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/testsite', (req, res) => {
  res.send('Hello Node.js Sample!\n');
});

app.get('**', (req, res) =>{
  res.send('Work in progeress!');
})

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);

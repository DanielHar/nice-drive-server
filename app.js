var express = require('express');
var app = express();
const config = require('./config/config');
const path = require('path');

app.listen(process.env.PORT || config.port);
console.log(`Node server is running in port ${config.port}`);
app.use(express.static(path.join(__dirname, 'public')))

app.get('/manager', (req, res) => {
   res.redirect('/manager.html');
});

app.get('/driver', (req, res) => {
   res.redirect('/driver.html');
});
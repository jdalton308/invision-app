
var path = require('path');
var express = require('express');

var BUILD_DIR = path.join(__dirname, 'build');
var app = express();



// Static files
app.use(express.static(BUILD_DIR));


// Basically, the initial load
app.get('*', function (req, res) {  
  res.sendFile(path.join(BUILD_DIR, '/index.html'));
});



app.listen(process.env.PORT || 8080);
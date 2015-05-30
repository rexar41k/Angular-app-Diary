var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

app.listen(8013);
console.log('Server start on port 8013');
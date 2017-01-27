'use strict';
let express = require("express");
let app = express();
app.use(express.static(__dirname + '/public'));

var port = Number( process.env.PORT || 8080 );

app.listen(port);
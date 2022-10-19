var express = require("express")

var PORT = process.env.PORT || 8002
var app = express();
var docs_handler = express.static(__dirname + '/docs/');
app.use(docs_handler);
//  start the server
app.listen(PORT);

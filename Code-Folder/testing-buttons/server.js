// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post('/saved', function(req, res) {
    res.sendFile
})

app.listen(PORT, function() {
    console.log("PORT " + PORT + ' is running!')
})
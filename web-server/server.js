/**
 * Created by manishgiri on 2/28/17.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello Express");
})

app.get("/about", function (req, res) {
    res.send("About Me");
})

app.use(express.static(__dirname +"/public"));

app.listen(3000);

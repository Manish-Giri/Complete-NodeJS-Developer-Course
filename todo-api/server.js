/**
 * Created by manishgiri on 4/11/17.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//TODOS - collection of todoitems - todo is the model
var todos = [
    {
        id: 1,
        description: "Meet mom for lunch",
        completed: false
    },
    {
        id: 2,
        description: "go to market",
        completed: false
    }
]

/**
 * GET REQUESTS -
 * all todos - GET /todos
 * individual todo  - GET /todos/:id
 */

app.get('/todos', function (req, res) {
    res.json(todos);
});


app.get('/', function (req, res) {
    res.send("Todo API Root");
});

app.listen(port, function () {
    console.log("Express listening on port " + port);
})

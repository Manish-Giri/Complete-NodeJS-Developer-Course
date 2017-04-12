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
    },
    {
        id: 3,
        description: "Learn node",
        completed: true
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

app.get('/todos/:id', function (req, res) {
    var todoID = parseInt(req.params.id);
    var todoItem = {};
    todos.forEach(function (todo) {
        if(todoID === todo.id) {
            todoItem = todo;
        }
    })
    var isObjEmpty = !Object.keys(todoItem).length;

    if(isObjEmpty) {
        res.status(404).send();
    }
    else {
        res.json(todoItem);
    }
    //res.send("Asking for todo with ID " + req.params.id);
})

app.get('/', function (req, res) {
    res.send("Todo API Root");
});

app.listen(port, function () {
    console.log("Express listening on port " + port);
})

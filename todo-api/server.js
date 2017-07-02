/**
 * Created by manishgiri on 4/11/17.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var todoNextID = 1;
var _ = require("underscore");

//TODOS - collection of todoitems - todo is the model
// var todos = [
//     {
//         id: 1,
//         description: "Meet mom for lunch",
//         completed: false
//     },
//     {
//         id: 2,
//         description: "go to market",
//         completed: false
//     },
//     {
//         id: 3,
//         description: "Learn node",
//         completed: true
//     }
//
// ]

var todos = [];

app.use(bodyParser.json());

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

    // use Underscore's findWhere
    var todoItem = _.findWhere(todos, {id: todoID});
    if(!todoItem) {
        res.status(404).send();
    }
    else {
        res.json(todoItem);
    }
})

app.get('/', function (req, res) {
    res.send("Todo API Root");
});


/**
 * POST todos to /todos
 */
app.post('/todos', function (req, res) {
    var body = req.body;

    if(!_.isBoolean(body.completed) || !_.isString(body.description) || !body.description.trim().length) {
        // bad data was sent
        return res.status(400).send();
    }

    // use .pick() to filter out whitelist data - remove unnecessary fields
    body = _.pick(body, "description", "completed");

    // use trim to remove spaces from description
    body.description = body.description.trim();

    //add ID field
    body.id = todoNextID++;

    //push body into array
    todos.push(body);

    // console.log("description = " + body.toString());
    res.json(body);
});

/**
 * DELETE a todo with ID
 */

app.delete('/todos/:id', function (req, res) {
    let toDeleteID = parseInt(req.params.id);

    // get todo ITEM to be removed
    // let deletedTodo = todos[toDeleteID];
    let matchedTodo = _.findWhere(todos, {id: toDeleteID});

    // if ID not found
    if(!matchedTodo) {
        //send error response
        res.status(404).json({"error": "No TODO found with that ID"});
    }

    else {
        // use .without() from underscore to return filtered todo array
        todos = _.without(todos, matchedTodo);
        res.json(matchedTodo);
    }

});

app.listen(port, function () {
    console.log("Express listening on port " + port);
})

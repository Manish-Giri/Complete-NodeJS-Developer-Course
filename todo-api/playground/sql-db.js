/**
 * Created by manishgiri on 7/2/17.
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/sql-db.sqlite'
});

let Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING
    },
    completed: {
        type: Sequelize.BOOLEAN
    }
});

sequelize.sync().then(function () {
    console.log("Everything is synced.");

    Todo.create({
        description: "Walk the dog",
        completed: false
    }).then(function (todo) {
        console.log("Finished");
        console.log(todo);
    })
});


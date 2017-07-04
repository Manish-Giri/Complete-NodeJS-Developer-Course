/**
 * Created by manishgiri on 7/3/17.
 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/dev-todo-api.sqlite'
});

let db = {};


// export the db object
module.exports = db;

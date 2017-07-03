/**
 * Created by manishgiri on 7/2/17.
 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/sql-db.sqlite'
});

sequelize.sync().then(function () {
    console.log("Everything is synced.");
})


/**
 * Created by manishgiri on 2/25/17.
 */
var weather = require('./weather.js');
var location = require('./location');

//use yargs to get user's input
var argv = require('yargs').option("location", {
    alias: "l",
    demand: false,
    describe: "Location to fetch weather for",
    type: "string"
}).help("help").argv;

if(typeof argv.l === "string" && argv.l.length > 0) {
    //user has entered specific location
    //call weather with this location
    weather(argv.l);
}

//get the weather
//weather();

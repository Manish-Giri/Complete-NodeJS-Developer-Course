/**
 * Created by manishgiri on 2/24/17.
 */
var request = require('request');

//var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=72c269f82f1a47216a1106cd04e0f37a";
var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ae0acb60e8db4952e081c2fb470a1b23";

request({url: 'http://ipinfo.io', json: true}, function(error, res, body) {
    console.log(JSON.stringify(body, null, 4));
});

request({
    url: url,
    json: true,

    }, function (error, response, body) {
    if(error) {
        console.log("Unable to fetch weather");
    }
    else {
        console.log(JSON.stringify(body, null, 4));
    }
});
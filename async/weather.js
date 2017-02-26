/**
 * Created by manishgiri on 2/24/17.
 */
var request = require('request');

//var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=72c269f82f1a47216a1106cd04e0f37a";
//var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ae0acb60e8db4952e081c2fb470a1b23";

function weather(location) {
    //location is passing
    // an explicit city
    if(!location) {
        var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=ae0acb60e8db4952e081c2fb470a1b23";
        request({
           url: url,
            json: true
        }, function (error, res, result1) {
            if (error) {
                console.log("Unable to fetch weather");
            }
            else {
                console.log("It's " + result1.main.temp + " degrees Celsius in " + city);
            }

        })
    }
    else {
        //a city is passed in
        var encodedLocation = encodeURI(location);
        url = "http://api.openweathermap.org/data/2.5/weather?q="+encodedLocation+"&units=metric&appid=ae0acb60e8db4952e081c2fb470a1b23";
        request({url: url, json: true}, function (error, res, result2) {
            if (error) {
                console.log("Unable to fetch IP location");
            }
            else {
                console.log("It's " + result2.main.temp + " degrees Celsius in " + location);

            }

        });
    }

}

module.exports = weather;

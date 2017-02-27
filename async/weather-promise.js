/**
 * Created by manishgiri on 2/26/17.
 */
var request = require('request')

function getWeather(location) {
    if(location) {
        //location is a string, the city
        var encodedLocation = encodeURI(location);
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodedLocation+"&units=metric&appid=ae0acb60e8db4952e081c2fb470a1b23";

        return new Promise(function(resolve, reject) {
            request({url: url, json: true}, function (error, res, body) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(body);

                }

            });
        });

    }
}

var location = "Tokyo";
getWeather(location).then(function (result) {
    console.log("It's " + result.main.temp + " degrees Celsius in " + location);

}, function (error) {
    console.log("Unable to fetch weather");
});

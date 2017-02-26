/**
 * Created by manishgiri on 2/25/17.
 */
function location() {
    var coords,lat,lon,city;
    request({url: 'http://ipinfo.io', json: true}, function (error, res, body) {
        if (error) {
            console.log("Unable to fetch IP location");
        }
        else {
            coords = body.loc.split(",");
            lat = coords[0];
            lon = coords[1];
            city = body.city;
        }
    })
}

module.exports = location;

/**
 * Created by manishgiri on 2/26/17.
 */
function doWork(shouldFail) {
    return new Promise(function (resolve, reject) {
        if(typeof shouldFail === 'boolean' && shouldFail === true) {
            setTimeout(function () {
                reject("Error - Promise failed");
            }, 2000);

        }
        else {
            console.log("Done!");
            setTimeout(function () {
                resolve("Success - Promise worked");
            }, 2000);

        }
    });
}

doWork().then(function () {
    return doWork(true);
}, function (err) {
    console.log(err);
}).then(function (res) {
    console.log(res);
    console.log("All done!");
}, function (err) {
    console.log(err);
}).catch(function () {
    console.log("All failed!");
})

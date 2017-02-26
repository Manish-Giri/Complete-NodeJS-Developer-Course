/**
 * Created by manishgiri on 2/26/17.
 */

function doPromiseWork(data) {
    console.log(data);
    return new Promise(function(resolve, reject) {
        //call resolve after 2 seconds
        setTimeout(function() {
            resolve("Promises worked");
        }, 2000);
//        setTimeout(function() {
//        reject("Promises failed");
//      }, 2000);
    });
}

doPromiseWork("Hello World").then(function(result) {
        console.log(result);
    } //function(error) {
    //console.log(error);
//}
);

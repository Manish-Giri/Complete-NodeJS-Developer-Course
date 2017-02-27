/**
 * Created by manishgiri on 2/26/17.
 */

function doPromiseWork(data) {
    //console.log(data);
    return new Promise(function(resolve, reject) {
        //call resolve after 2 seconds
        setTimeout(function() {
            resolve(data);
        }, 2000);
//        setTimeout(function() {
//        reject("Promises failed");
//      }, 2000);
    });
}

/*doPromiseWork("Hello World").then(function(result) {
        console.log(result);
    } //function(error) {
    //console.log(error);
//}
);*/

doPromiseWork(2).then(function(result){

    console.log(result);
    return result += 1;
}).then(function(result){
    console.log(result);
    return result += 2;
}).then(function(result){
    console.log(result);
    //result += 1;
})


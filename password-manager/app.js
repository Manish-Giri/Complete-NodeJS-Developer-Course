console.log("Starting password manager");

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'Manish');
var userName = storage.getItemSync('name');
console.log("Saved name is = " + userName);

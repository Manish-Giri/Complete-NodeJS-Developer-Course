console.log("Starting password manager");

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'Manish');
 storage.setItemSync('accounts', [
   {username: "Andrew", balance: 0}
 ]);

var userName = storage.getItemSync('name');
console.log("Saved name is = " + userName);

var account = storage.getItemSync('accounts');
console.log("Accounts = " + account);

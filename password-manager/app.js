console.log("Starting password manager");

var storage = require('node-persist');
storage.initSync();

//function to create an account, arguments - account object
//account object - name(facebook), username, password
function createAccount(account) {
  //first, get accounts stored with node-persist
  var accounts = storage.getItemSync("accounts");

  //if returned item is undefined, set it to an empty array
  if(typeof accounts === "undefined") {
    accounts = [];
    accounts.push(account);
  }

  return account;
}

//function to get an account - arguments - account name
function getAccount(accountName) {
  //load all saved accounts
  var accounts = storage.getItemSync("accounts");
  var matchedAccount = {};
  accounts.forEach(function(account) {
    if(account.name === accountName) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

createAccount({
  name: "Facebook", username: "randomname", password: "Password!"
});

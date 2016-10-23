/**
 * Created by hi on 10/22/2016.
 */
var crypto = require('crypto-js');

//message
var secretMessage = "I hid the chips under the couch.";
//key
var secretKey = '123abc';

//encrypt the message
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log(`Encrypted Message: ${encryptedMessage}`);

//decrypt the message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
//convert array of bytes to string
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log(`Decrypted Message: ${decryptedMessage}`);

/**
 * Created by manishgiri on 10/22/16.
 */
var person = {
    name: 'Andrew',
    age: 24
}

var personJSON = JSON.stringify(person);
console.log(`personJSON = ${personJSON} `);
console.log(typeof personJSON);

console.log();

var personObject = JSON.parse(personJSON);
console.log(`personObject.name = ${personObject.name}`);
console.log(typeof personObject);
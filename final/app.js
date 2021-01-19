// Today we talk about objects - {}

// What is an object?
// Array -> that structured organized via indexes
// Object -> data structure organized via "keys"
// Object -> usually defined by "key value pairs" or: properties and values
// Property and Key are used interchangeably

// people usually seperate arrays and objects mentally with the following mental model:
// array: list of things
// object: properties pertaining some "thing"

const person = {
  name: "André",
  job: "Lead Teacher",
  age: 26,
  from: "Portugal",
  isBald: true,
  hobbies: ["music", "coding", "netflix"],
  isHealthy: undefined,
  hasPreviousCareer: true,
};

const person2 = {
  name: "Filipe",
  age: 24,
  from: "Africa. Jk, Madeira",
  isBald: false,
  hobbies: ["music", "coding", "learning"],
  isHealthy: true,
  hasPreviousCareer: true,
};

// objects, like arrays, can have any data property inside them, from strings, all the way to other objects

// HOW TO ACCESS properties inside an object?

// the dot (.) operator
person2.name; // => Filipe

// the square bracket operator
// inside the square operator you need to put a string that will be the key inside the object

person["hobbies"]; // => ["music", "coding", "netflix"]
// because it is a string (javascript data type) we can also use our own variables:

const hyperImportantVar = "from";

person2[hyperImportantVar]; // "Africa. Jk, Madeira"

// there is no clear cut way of looping over an object:
// for that you use the for ... in loop
for (let key in person) {
  console.log("key:", key);
  // here, key means nothing. its just a variable name that we created. however, for each loop, the variable key is each individual key: name / hobbies, etc...
  console.log("value of object", person[key]); // the value of person.name , person.hobbies etc
}

const teachingStaff = [person, person2];

// LETS DO SOME JS Foo
// How can we reach filipe's third hobbie inside this teachingStaff Variable?

teachingStaff[1].hobbies[2]; // get accustomed to weird weird behaviours

function printMainHobbie(index) {
  console.log(teachingStaff[index].hobbies[0]);
}

const andresFavHobby = printMainHobbie(0);
const filipesFavHobby = printMainHobbie(1);
// weird example but to compound the function and array exercises from prevoius classes

const anArray = [1, 2, 3, 4, undefined];

// {
//    "0":1,
//    "1":2,
//    "2":3,
//    "3":4,
//    "4":undefined
// }

const person = {
  name: "André",
  job: "Lead Teacher",
  ageAccordingToGoogle: 45,
  from: "Portugal",
  age: 26,
  isBald: true,
  hobbies: ["learning", "music", "coding"],
  isHealthy: null,
  hasPreviousCareer: true,
};

const person2 = {
  name: "Filipe",
  job: "Assistant To The Lead Teacher",
  ageAccordingToGoogle: 24,
  age: 24,
  isBald: false,
  hobbies: ["learning", "music", "coding"],
  isHealthy: true,
  hasPreviousCareer: true,
  key: "the key",
};

// person2.isBald = true;

// console.log("Andres name", person.name);
// console.log("Filipes name", person2["name"]);
const baldnessCheck = "isBald";
// console.log("Andres baldness?", person["isBald"]);

// for ... in loop

for (let key in person2) {
  console.log("key: ", key, "value: ", person2[key]);
  //   console.log(person2.key);
}

console.clear();

const emptyObj = {};

const anotherEmptyObj = {};

const test = emptyObj;

console.log(emptyObj === anotherEmptyObj);
console.log(emptyObj === test);
//  1231210120212 === 0122045054

const teachingStaff = [person, person2];

console.log(teachingStaff[1].hobbies[2]);
console.log(teachingStaff[1].isBald.toString().toUpperCase());
console.log(teachingStaff[0].isHealthy.toString().toUpperCase());

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
// console.log(teachingStaff[0].isHealthy.toString().toUpperCase());
console.clear();
const student1 = {
  name: "John",
  job: "Student",
  ageAccordingToGoogle: 18,
  age: 37,
  from: "DR",
  isBald: false,
  hobbies: ["music", "bouldering", "comics"],
  isHealthy: true,
  hasPreviousCareer: true,
};
const student2 = {
  name: "Brittney",
  job: "Tech Specialist",
  ageAccordingToGoogle: 29,
  from: "US",
  age: 29,
  isBald: "truthy",
  hobbies: ["volleyball", "surfing", "snowboarding"],
  isHealthy: true,
  hasPreviousCareer: true,
};

const student3 = {
  name: "Tadej",
  from: "Eslovenia",
  job: "Product Specialist",
  ageAccordingToGoogle: 20,
  age: 32,
  isBald: false,
  hobbies: ["surfing", "sailing"],
  isHealthy: true,
  hasPreviousCareer: true,
};

const student4 = {
  name: "Luca",
  from: "Belgium",
  job: "Technical Writer",
  ageAccordingToGoogle: 16,
  age: 31,
  isBald: false,
  hobbies: ["writing", "running", "bouldering"],
  isHealthy: true,
  hasPreviousCareer: true,
};

const studentArr = [student1, student2, student3, student4];

function printAllHobbies(arr) {
  //   let hobbieArr = [];
  //   for (let student of arr) {
  //     for (let hobbie of student.hobbies) {
  //       hobbieArr.push(hobbie);
  //     }
  //   }
  //   return hobbieArr;
  //   console.log(
  //     `${studentArr[0].hobbies} ${studentArr[1].hobbies} ${studentArr[2].hobbies} ${studentArr[3].hobbies}`
  //   );
  const studentArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].hobbies.length; j++) {
      studentArr.push(arr[i].hobbies[j]);
    }
  }

  //   arr.forEach(function (student) {
  //     student.hobbies.forEach(function (hobbie) {
  //       studentArr.push(hobbie);
  //     });
  //   });
  console.log("studentArr:", studentArr);
}

printAllHobbies(studentArr); // ["music", "bouldering", "comics", "surfing", "sailing", "volleyball", "surfing", "snowboarding", "writing", "running", "bouldering"]

console.log(printAllHobbies(studentArr));

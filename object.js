//string
// number
// null
// boolean
// object {}

let student = {
  FirstName: "Saruulbayar",
  LastName: "Batkhuyag",
};
console.log(student.FirstName);

// Exercise with Object + Function + Array

//________________________+++++++_____________________________________

let Students = [
  { name: "Jason", age: 34, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 27, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 34, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 19, grade: 75, gender: "female", balance: 54000 },
];

function FindMaxBalance(arr) {
  let MaxBalancedStudent = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (MaxBalancedStudent.balance < arr[i].balance) {
      MaxBalancedStudent = arr[i];
    }
  }

  return MaxBalancedStudent;
}

console.log(FindMaxBalance(Students));

// Exercise: 2  - Find the any random aged student with the user input

let Students2 = [
  { name: "Jason", age: 30, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 27, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 34, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 30, grade: 75, gender: "female", balance: 54000 },
];

function FindStudentByAge(arr, age) {
  let StudentByAge = arr[0];
  let FindAge = age;

  for (i = 0; i < arr.length; i++) {
    if ((StudentByAge.age = FindAge)) {
      StudentByAge = arr[i];
    }
  }
  return StudentByAge;
}

let Result = FindStudentByAge(Students2, 300);
console.log(Result);

// Exercise 3: find Average age of all students

let Students3 = [
  { name: "Jason", age: 36, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 34, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 22, grade: 75, gender: "female", balance: 54000 },
];

function FindAvgAge(arr) {
  let AverageAge = arr[0];
  let Summary = 0;

  for (i = 0; i < arr.length; i++) {
    Summary += AverageAge.age;
    Average = Summary / arr.length;
  }

  return Average;
}

let Result3 = FindAvgAge(Students3);
console.log("Average age of all students are:" + " " + Result3);

// Exercise 4: find Average Balance of Adults

let Students4 = [
  { name: "Jason", age: 20, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
];

function FindAvgBalanceOfAdults(arr) {
  let sum = 0;
  let counter = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      sum += arr[i].age;
      counter++;
    }
  }

  let Average = sum / counter;

  console.log(counter);
  console.log(sum);
  return Average;
}

let Result4 = FindAvgBalanceOfAdults(Students4);
console.log("Average balance of:" + " " + Result4);

// Exercise 5: Count number of male students

let Students5 = [
  { name: "Jason", age: 20, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
  { name: "Hurley", age: 56, grade: 75, gender: "male", balance: 54000 },
  { name: "Michael", age: 56, grade: 75, gender: "male", balance: 54000 },
  { name: "Terry", age: 56, grade: 75, gender: "male", balance: 54000 },
];

function FindMaleStudents(arr) {
  let counter = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      counter++;
    }
  }

  return counter;
}

let Result5 = FindMaleStudents(Students5);
console.log("Male students are:" + " " + Result5);

// Exercise 6: Calculate the female student portion in the class

let Students6 = [
  { name: "Jason", age: 20, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
  { name: "Hurley", age: 56, grade: 75, gender: "male", balance: 54000 },
  { name: "Michael", age: 56, grade: 75, gender: "male", balance: 54000 },
  { name: "Terry", age: 56, grade: 75, gender: "female", balance: 54000 },
  { name: "Ashley", age: 24, grade: 65, gender: "female", balance: 54000 },
];

function FindFemaleStudentsPortion(arr) {
  let NumberofFemales = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      NumberofFemales++;
    }
  }

  let total = arr.length;
  let Portion = (NumberofFemales * 100) / total;

  return Portion;
}

let Result6 = FindFemaleStudentsPortion(Students6);
console.log("Female Students Portion is:" + " " + Result6 + "%");

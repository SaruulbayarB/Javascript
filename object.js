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

// Exercise 6: Calculate the female student portion (%) in the class

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

// JS Method.

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ array болгон ялгаж буцаадаг функц бич.

const Students7 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 12, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
];

function FindTeenagerArray(teenagers) {
  const FilteredArray = [];
  let count = 0;

  for (i = 0; i < teenagers.length; i++) {
    if (teenagers[i].age <= 18) {
      FilteredArray[count] = teenagers[i];
      count++;
    }
  }

  return FilteredArray;
}

console.log(FindTeenagerArray(Students7));

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.
const Students8 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 12, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
];

function FindSumOfGrades(Grade) {
  let SumofGrades = 0;

  for (i = 0; i < Grade.length; i++) {
    SumofGrades += Grade[i].grade;
  }

  return SumofGrades;
}

console.log(FindSumOfGrades(Students8));

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

const Students9 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 12, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
];

function FindStudentByName(Students, Name) {
  let StudentName = [];
  for (i = 0; i < Students.length; i++) {
    if (Students[i].name === Name) {
      StudentName = Students[i];
    }
  }
  return StudentName;
}
console.log(FindStudentByName(Students9, "Carol"));

const Students10 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 12, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 75, gender: "female", balance: 54000 },
];

function FindStudentByName(Students, Name) {
  let FilteredStudentNames = [];
  for (i = 0; i < Students.length; i++) {
    if (Students[i].name === Name) {
      FilteredStudentNames.push(Students[i]);
    }
  }

  return FilteredStudentNames;
}

console.log(FindStudentByName(Students10, "Carol"));

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

const Students11 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Carol", age: 20, grade: 55, gender: "female", balance: 54000 },
  { name: "Jasmine", age: 12, grade: 69, gender: "female", balance: 54000 },
  { name: "Sarah", age: 20, grade: 75, gender: "female", balance: 54000 },
];

Students11.sort((a, b) => a.grade - b.grade);

console.log(Students11);

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.

const Students12 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 99, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Ulya", age: 20, grade: 55, gender: "female", balance: 14000 },
  { name: "Jasmine", age: 12, grade: 69, gender: "female", balance: 5000 },
  { name: "Sarah", age: 20, grade: 75, gender: "female", balance: 99000 },
];

function FindRichStudents(ClassTycoons) {
  let RichStudents = [];
  for (i = 0; i < ClassTycoons.length; i++) {
    if (ClassTycoons[i].balance >= 10000) {
      RichStudents.push({
        name: ClassTycoons[i].name,
        balance: ClassTycoons[i].balance,
      });
    }
  }
  return RichStudents;
}

console.log(FindRichStudents(Students12));

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }


const Students13 = [
  { name: "Jason", age: 16, grade: 87, gender: "male", balance: 55000 },
  { name: "Susan", age: 20, grade: 58, gender: "female", balance: 35000 },
  { name: "Jay", age: 16, grade: 100, gender: "male", balance: 5000 },
  { name: "Carol", age: 13, grade: 75, gender: "female", balance: 54000 },
  { name: "Ulya", age: 20, grade: 55, gender: "female", balance: 14000 },
  { name: "Jasmine", age: 12, grade: 69, gender: "female", balance: 5000 },
  { name: "Sarah", age: 20, grade: 75, gender: "female", balance: 99000 },
];

function findGenderGradeAverages(students) {
  let maleCounter = 0;
  let maleGradeSum = 0;

  let femaleCounter = 0;
  let femaleGradeSum = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "male") {
      maleCounter++;
      maleGradeSum += students[i].grade;
    } else if (students[i].gender === "female") {
      femaleCounter++;
      femaleGradeSum += students[i].grade;
    }
  }

  const maleAvg = maleGradeSum / maleCounter;
  const femaleAvg = femaleGradeSum / femaleCounter;

  return {
    maleAverage: maleAvg,
    femaleAverage: femaleAvg,
  };
}

const result = findGenderGradeAverages(Students13);
console.log("Male:", result.maleAverage);
console.log("Female:", result.femaleAverage);





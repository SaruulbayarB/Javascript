// Exercise 1: Find the summary of array assigned numbers

let grades = [1, 1, 1, 1, 1, 1, 1, 1];

function FindSum(arr) {
  let Sum = 0;

  for (i = 0; i < arr.length; i++) {
    Sum = Sum + arr[i];
  }

  let Summary = Sum;
  return Summary;
}

let Result = FindSum(grades);

console.log(Result);

// Exercise 2: Find the summary of array assigned Even numbers
// * Array explanation: This example used both of Array and Function.
// * Function calls the array into it via ("arr" and "grades2")

let grades2 = [10, 11, 12, 13, 15, 50, 50, 121];

function FindSumOfEvenNumbers(arr) {
  let Sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      Sum += arr[i];
    }
  }
  return Sum;
}

let Result2 = FindSumOfEvenNumbers(grades2);
console.log(Result2);

// Exercise 3: Find the Max of the given Array

let grades3 = [10, 0, 40, 30, 10, -10, 90, 95, 88];

function FindMaxGrade(arr) {
  let max = arr[8];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let Result3 = FindMaxGrade(grades3);

console.log(Result3);

// Exercise 4: Find the average of array assigned Even numbers
// * Array explanation: This example used both of Array and Function.
// * Function calls the array into it via ("arr" and "grades2")

let grades4 = [10, 20, 23, 22, 48, 58];

function FindAvgofEvenNumbers(arr) {
  let count = 0;
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      count++;
      console.log("Summary is:" + sum);
      console.log("number of Even Number:" + count);
    }
  }
  let avg = sum / count;
  return avg;
}
let Result4 = FindAvgofEvenNumbers(grades4);

console.log(Result4);

// Exercise 8: Find the first and last digit of the given number

let Number = [34065, 87889, 54578];

function findFirstAndLastDigits(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numStr = arr[i].toString(); // Convert number to string
    let firstDigit = numStr[0]; // First character (first digit)
    let lastDigit = numStr[numStr.length - 1]; // Last character (last digit)

    console.log(`Number: ${arr[i]}, First: ${firstDigit}, Last: ${lastDigit}`);
  }
}

findFirstAndLastDigits(Number);

let Number = [34065, 87889, 54578];

stringnum = Number.toString();
console.log(Number[0]);
console.log(typeof Number[0]);

console.log(stringnum[4]);
console.log(typeof stringnum[4]);

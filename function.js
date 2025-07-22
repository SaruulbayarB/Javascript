function FindBirthYear(age) {
  let BirthYear = 2025 - age;
  console.log(BirthYear);
}

FindBirthYear(10);

function Greeting(name) {
  console.log("Sain bna uu:" + name);
}

Greeting("Boldoo");

function FindMin(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    console.log(num1);
  } else if (num2 <= num1 && num2 <= num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}
FindMin(1000, 2000, 300);

function FindMin(num1, num2, num3) {
  console.log(Math.min(num1, num2, num3));
}
FindMin(1000, 2000, 300);

// Exercise 1: - Find the max out of 2 numbers

function FindMax2(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

FindMax2(1000, 200);

// Exercise 2: - Find the max out of 3 numbers

function FindMax3(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
  } else if (num2 >= num3 && num2 >= num1) {
    console.log(num2);
  } else {
    console.log(num3);
  }

  console.log(Math.max(num1, num2, num3));
}

FindMax3(1000, 2000, 300);

// Exercise 3: - Determine if the number is Odd or Even or Zero

function DetermineNumber(number) {
  if (number % 2 === 0 && number > 0) {
    console.log("Your number is Even!");
  } else {
    console.log("Your number is Odd!");
  }

  if (number === 0) {
    console.log("Your number is Zerooo!");
  } else console.log("");
}

DetermineNumber(0);

// Exercise 4: - Determine if the number can be divided by both 3 and 5

function DetermineDivide35(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Your number can be devided by both 3 and 5");
  } else {
    console.log("Your number cannot be devided");
  }
  if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Your number is divided by 3 only");
  } else {
    console.log("");
  }
}

DetermineDivide35(15);

function DetermineDivide3(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Your number is divided by 3 only");
  } else {
    console.log("Your number cannot be devided by 3");
  }
}

DetermineDivide3(15);

// Exercise 5: - Determine if input value is the Leap Year or not

function SayLeapYear(year) {
  if (year % 400 === 0) {
    console.log("The year is the Leap Year");
  } else {
    console.log("The year is not the Leap Year!");
  }
}
SayLeapYear(2001);

// Exercise 6: - Say day name against 1-7 number entries

function SayDay(day) {
  if (day === 1) {
    console.log("Monday");
  } else console.log("");
  if (day === 2) {
    console.log("Tuesday");
  } else console.log("");
  if (day === 3) {
    console.log("Wednesday");
  } else console.log("");
  if (day === 4) {
    console.log("Thursday");
  } else console.log("");
  if (day === 5) {
    console.log("Friday");
  } else console.log("");
  if (day === 6) {
    console.log("Saturday");
  } else console.log("");
  if (day === 7) {
    console.log("Sunday");
  } else console.log("");
}
SayDay(5);

// Exercise 7: - Calculate the margin

function CalculateMargin(SaleQuantity) {
  let OrderPrice = 100;
  let OrderQty = 20;
  let SalePrice = 150;
  let Cost = OrderPrice * OrderQty;
  let Sales = SalePrice * SaleQuantity;
  let Margin = Sales - Cost;

  if (Cost > Margin) {
    console.log("Aldagdaltai:" + Margin);
  } else {
    console.log("Aldagdalgui:" + Margin);
  }
}
CalculateMargin(8);

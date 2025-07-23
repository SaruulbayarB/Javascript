//*
//**
//****
//*****
//******

let size = 5;

for (let i = 1; i <= size; i++) {
  let result = "";

  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  console.log(result);
}
// Exercise 1. Start Pattern

//*****
//*****
//*****
//*****
//*****

for (let i = 1; i <= size; i++) {
  let result = "";

  for (let j = 1; j <= size; j++) {
    result += "*";
  }
  console.log(result);
}

// Exercise 2. Hollow Square Pattern

//*****
//*   *
//*   *
//*   *
//*****

let size = 5;
for (let row = 1; row <= size; row++) {
  let result = "";
  for (let column = 1; column <= size; column++) {
    if (column === 1 || column === size || row === 1 || row === size) {
      result += "*";
    } else {
      result += " ";
    }
  }
  console.log(result);
}

//Exercise 3: Hollow Square Start Pattern with Diagnonal
//*   *
//**  *
//*** *
//*****
//*****
let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";
  for (let column = 1; column <= size; column++) {
    if (column === size || row === 1 || row === size || column === 1) {
      result += "*";
    } else {
      result += " ";
    }
  }
  console.log(result);
}

//Exercise 4: Hollow Square Start Pattern with Diagnonal

let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";
  for (let column = 1; column <= size; column++) {
    if (
      column === size ||
      row === 1 ||
      row === size ||
      column === 1 ||
      row === column
    ) {
      result += "*";
    } else {
      result += " ";
    }
  }
  console.log(result);
}

//Exercise 5: Hollow Square Start Pattern with Diagonal
let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";

  for (let column = 1; column <= size - 1 + size; column++) {
    if (column <= size - row) {
      result += " ";
    } else if (column <= size - row + size) {
      result += "*";
    }
  }

  console.log(result);
}

//Exercise 4: Mirrored Rhombus Star Pattern
let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";

  for (let column = 1; column <= 9; column++) {
    if (column < row) {
      result += " ";
    } else if (column < row + size) {
      result += "*";
    } else {
      result += " ";
    }
  }

  console.log(result);
}
//Exercise 5: Hollow Rhombus Star Pattern
//     *****
//    *   *
//   *   *
//  *   *
// *****

let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";

  for (let column = 1; column <= size - 1 + size; column++) {
    if (column <= size - row) {
      result += " ";
    } else if (column <= size - row + size) {
      let starPos = column - (size - row);

      if (row === 1 || row === size || starPos === 1 || starPos === size) {
        result += "*";
      } else {
        result += " ";
      }
    }
  }
  console.log(result);
}

// Exercise 8. Right Triangle Star Pattern
// *
// **
// ***
// ****
// *****

let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";

  for (let column = 1; column <= size; column++) {
    if (column <= row) {
      result += "*";
    } else {
      result += " ";
    }
  }

  console.log(result);
}

// Exercise 9. Mirrored Right Triangle Star Pattern
// *****
// ****
// ***
// **
// *

let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";

  for (let column = 1; column <= size; column++) {
    if (column >= row || column === row) {
      result += "*";
    } else {
      result += " ";
    }
  }

  console.log(result);
}

// Exercise 10. Hollow Right Triangle Star Pattern


// *
// **
// * *
// *  *
// *****

let size = 5;

for (let row = 1; row <= size; row++) {
  let result = "";

  for (let column = 1; column <= size; column++) {
    if (column <= row) {
      result += "*";
    } else if (column >= row - 1 || ) {
      result += " ";
    }
  }

  console.log(result);
}

// Exercise 13. Pyramid (Equilateral Triangle) Star Pattern

//     5
//    456
//   34567
//  2345678
// 123456789


let size = 5;

for (let row = 0; row <= size; row++) {
  let result = "";

  for (let column = 0; column <= size * 2 - 1; column++) {
    if (column >= size - row - 1 && column <= size + row - 1) {
      result += "*";
    } else {
      result += " ";
    }
  }

  console.log(result);
}
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

    for (let column = 1; column <= size; column++){
        
        if (column === 1 || column === size || row === 1 || row === size)  {
            result += "*"
        }
        else {
            result += " " 
        }
    }
    console.log(result);
}
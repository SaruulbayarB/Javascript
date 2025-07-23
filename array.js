// Exercise 1: Find the summary of array assigned numbers 


let grades = [1,1,1,1,1,1,1,1]

function FindSum(arr) {

    
    let Sum = 0; 

    for (i = 0; i < arr.length; i++) {
        Sum = Sum + arr[i]
    }

    let Summary = Sum;
    return Summary; 
    
}

let Result = FindSum (grades); 

console.log(Result);

// Exercise 2: Find the summary of array assigned Even numbers 
    // * Array explanation: This example used both of Array and Function. 
    // * Function calls the array into it via ("arr" and "grades2")


let grades2 = [10,11,12,13,15,50,50,121]

function FindSumOfEvenNumbers(arr) {

    let Sum = 0; 

    for (i = 0; i < arr.length; i++) {
       

        if (arr[i] % 2 === 0) {

            Sum += arr[i]
    }
   
}

return Sum; 

}

let Result2 = FindSumOfEvenNumbers(grades2); 

console.log(Result2);

// Exercise 3: Find the Max of the given Array 

let grades3 =[10, 0, 40, 30, 10, -10, 90, 95, 88]; 



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

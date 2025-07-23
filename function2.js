let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let MinusButton = document.getElementById("MinusBtn");
let AnswerP = document.getElementById("Answer"); 


function FindMinus(){

    let TrueNum1 = parseInt(number1.value)
    let TrueNum2 = parseInt(number2.value)
    let DeductedValue = TrueNum1 - TrueNum2;
    AnswerP.innerText = DeductedValue 
    return DeductedValue; 
}


MinusButton.addEventListener("click", FindMinus);  

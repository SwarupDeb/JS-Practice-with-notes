// function addNumbers(number1 , number2) 
 //if anything written during creating functions it is called parameters
// {
//     console.log(number1 + number2);
// }
// addNumbers(3, 5) 
//the value which is passed inside during the function call is known as arguments


function addNumbers(number1 , number2) 
{
    let result = number1 + number2
    return result
}
const result = addNumbers(3,5)

console.log("Result:", result);

function calGamePrice(...num1){   //use of rest operator
    return num1
}

console.log(calGamePrice(200,400,500))
/*
Anything written on "{}" either inside a function or condinational statement is blocked scope and rest is global scope
*/

let zero = 87
if(true){
    let zero = 0
    const ones =77
    console.log("Inner:", zero);
}

console.log("Outer:",zero);

// interview QnA -> Global scope of browser is different from global scope that is mention in IDE and running through node.

console.log(addone(5)); 
function addone(num)
{
    return num + 1;
}

addTwo(2)
const addTwo = function(num){
    return num+2
}

//hoisting concept has been used will discuss later
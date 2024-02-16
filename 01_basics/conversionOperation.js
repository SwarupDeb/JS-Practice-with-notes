let lives = "3star" // for null it will print 0 , for undefined NAN , true=1 false=0
console.log(typeof(lives));

let valueInLives = Number(lives)
console.log(typeof valueInLives);
console.log(valueInLives); //NAN = Not A Number because it is a string, it changes type but actually it is a string

// for boolean empty string "" -> false and if something written in string suppose "Swarup"-> true

let value = 3
let negvalue = -value
console.log(negvalue)

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

// Increment operator->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//Decrement Operator->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement

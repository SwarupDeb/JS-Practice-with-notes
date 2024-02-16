// Primitive Data Types -> 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt



//JavaScript is a dynamically typed language

const id = Symbol('123')
const sId = Symbol('123')

console.log(id === sId); //false

const bigNumber = 54485114641546n; // if n is specified at last it will tell JS that it to be converted in BigInt

//Reference/Non-Primitive Data Types -> Array, Objects, Functions

//Array
const arr = [1,2,3,4];

//Object
let obj = {
    name:"Swarup",
    age: 22,
}

//functions

const save = function(){
    console.log("Hi");
}

/* TypeofValue

Undefined->undefined
Null->object
Boolean->boolean
Number->number
String->string
Symbol->symbol
Non-Primitive gives type Object and for function it is function/fucntion object
*/
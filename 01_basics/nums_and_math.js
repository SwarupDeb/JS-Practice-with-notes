//-------Number--------------
const fig = 333
console.log(fig);

const paisa = new Number(25000)
console.log(paisa);

console.log(paisa.toString().length);
console.log(paisa.toFixed(2));

const otherNum = 33.8568

console.log(otherNum.toPrecision(3));

const zero = 1000000
console.log(zero.toLocaleString('en-IN'));

// --------------Maths------------------
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.PI);

console.log(Math.random()); // random will always provide a value in between 0 and 1

console.log((Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.round(Math.random()* (max-min + 1)+ min));
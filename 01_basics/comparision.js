// console.log(2>1);
// console.log(2>=1);
// console.log(2 < 1);
// console.log(2 == 2);
// console.log(2 != 1);

console.log(null>0);
console.log(null == 0);
console.log(null>=0);

/*
The reason is that an equality check == and comparision > < >= <= works differently
Comparision convert null to a number treating it as 0
That's why (9) null>=0 is true and (7) null>0 is flase
*/

console.log("2" === 2); //strict equality compare the type also
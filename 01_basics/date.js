let myDate = new Date()
console.log(myDate.toDateString());
console.log(typeof myDate);      // can ask in interview about the type of date

let birthDate = new Date(2001, 0, 9, 1,1) // we can also give date "01-01-2001" in this format
console.log(birthDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp) //can be used for created poll,quizes winner ,booking time etc.
console.log(birthDate.getTime());

console.log(Math.round(Date.now()/1000)); // if we want to convert miliseconds to seconds than we have to divide by 1000


let tDate = new Date()
console.log(tDate.getFullYear()); //several methods are there like this
const name = "Swarup"
const count = 22
console.log(`Hello my name is ${name} and my age is ${count}`);


const gameName = new String('spiderman-sd-ds')
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

const anotherString = gameName.slice(0,4)
console.log(anotherString);

// .trim eliminate blank spaces

const url = "https://swarup.com/swarup%20deb"
console.log(url.replace('%20', '-'));

console.log(url.includes('swarup'));

console.log(gameName.split('-'));
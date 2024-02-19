// const gameUser = new Object()  singleton way of creating object 

const gameUser = {} //objectliterals

gameUser.id='548wad'
gameUser.name="Swarup"
gameUser.isLoggedIn=false

// console.log(gameUser);

const casualUser = {
    email: "sam@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Swarup",
            lastname:"Deb"
        }
    }
}

// console.log(casualUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

// const obj3 = Object.assign({}, obj1,obj2) 
// "{}" This is not necessary but for industry standard "{}" will act as traget and the obj will act as source

const obj3 ={...obj1, ...obj2} //using spread operator to combine the obj 

console.log(obj3);

console.log(Object.keys(gameUser));
console.log(Object.values(gameUser));
console.log(Object.entries(gameUser));

console.log(gameUser.hasOwnProperty('isLoggedIn'));

const game = {
    gameName: "Weathering waves",
    price: "Free to play", 
    gameCompany: "Kuro Studios"
}
const {gameCompany: comapny} = game //destructuring -> mostly used in reactjs
console.log(comapny);

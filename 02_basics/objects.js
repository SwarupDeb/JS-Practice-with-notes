//singleton ->In singleton Object.create is used to create object

//object literals -> we generally use it to create object

//if nothing is passed in curly braces{} than it is empty object

const spSym = Symbol("key1")

const user = {
    name: " Swarup",
    "full name":"Swarup Deb",
    [spSym]: "specialKey1",
    age : 22,
    location : "Machmara",
    email:"any@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[spSym]);

user.email = "conquerer@gmail.com"
Object.freeze(user)
user.email = "sdeb@gmail.com"
console.log(user);


user.greeting = function(){
    console.log("Hello");
}

console.log(user.email);

  
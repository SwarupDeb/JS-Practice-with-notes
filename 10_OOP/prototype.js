// let myName = "swarup     "
// let mychannel = "coffee     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.swarup = function(){
    console.log(`swarup is present in all objects`);
}

Array.prototype.heyswarup = function(){
    console.log(`swarup says hello`);
}

// heroPower.swarup()
// myHeros.swarup()
// myHeros.heyswarup()
// heroPower.heyswarup()

// inheritance

const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "coffeeAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"swarup".trueLength()
"iceTea".trueLength()
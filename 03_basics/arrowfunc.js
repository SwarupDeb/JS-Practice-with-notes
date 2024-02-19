//This keyword basically refers to current context

//fat arrow function
const addTwo =(num1, num2)=>{
    return num1+num2
}

// for implicit return we can write
// const addTwo = (num1,num2)=>num1+num2

//Note-> If we use "{}" then we have to write return but if we use "()" then we donot have to write return 

const obj = (name)=>({username:"Swarup"})

console.log(obj("name"));

console.log(addTwo(3,4));
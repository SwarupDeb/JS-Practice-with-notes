//IIFE-> Immediately Invoked Function Expression

(function game(){
    //named IIFE
    console.log(`DB connected`);
})();

//unnamed IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Swarup')

//Note->JS don't know when to end a function,so to inform it we have put semicolon ";" after a function
/*
Interview QnA->
Sometime problem caused due to pollution in GLobal Scope, for removing the pollution from Global scope variable or anything we use IIFE

*/ 
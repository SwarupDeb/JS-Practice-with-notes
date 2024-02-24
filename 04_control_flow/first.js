 // === -> It checks the type of the varilble also checks equal

// if(2==="2"){
//     console.log("executed");
// }

//!== ->it check the type also check not equal
// if(2 !== 2){
//     console.log("executed");
// }
// else{
//     console.log("not");
// }

const power = 777
if(power > 600)
{
    let power  = "smash"
    console.log(`User power: ${power}`);
}

const paisa = 10000
// if(paisa > 5000) console.log("money");

if(paisa>5000)
{
    console.log("less than");
}
else if(paisa<9000){
    console.log("greater than");
}
else{
    console.log("equal");
}

const userLoggedIn = true
const debitCard= true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to Rock");
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("Allow to Sign-In");
}

 
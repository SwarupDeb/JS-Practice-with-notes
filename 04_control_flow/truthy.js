const userEmail = "default@example.com";

if(userEmail) {
    console.log("Got useremail");
}
else{
    console.log("Not got useremail");
}

//falsy values -> false, null, undefined, 0, "",-0, BigInt(0n), NaN

//truthy values -> true, 1, "true", "1", "0", [],{},functon(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

//Nullish coalescing operator (??): null undefined -> mostly used in database tests

let val1;

val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

//Terniary Operators

// conditon ? true : false;

const age = 18;

age >= 18 ? console.log("You are old") : console.log("You are young");

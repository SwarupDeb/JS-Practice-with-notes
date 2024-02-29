const user ={
    username: 'Swarup',
    loginCount: 4,
    signedIn:true,

    getUserDetails : function(){
        console.log(this.username);
        console.log(this.loginCount);
        console.log(this.signedIn);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function USer(username,loginCount,signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn
    
    //Method
    this.getUserDetails = function(){
        console.log(this.username);
        console.log(this.loginCount);
        console.log(this.signedIn);
    }
    return this //we can eiter write this line or not if not then also it will return as implicit return
}
const userOne = new USer('Swarup','4','true')
const userTwo = new USer('Sanu', '7','false')
console.log(userOne.constructor)

//study-> instanceof
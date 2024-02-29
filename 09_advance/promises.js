const promiseOne = new Promise((resolve, reject) => {
    //Do an async rask
    //Db calls, cryptography, network
    setTimeout(() => {
        console.log('Task completed successfully')
        resolve();
    }, 10000);
})

promiseOne.then(function(){
    console.log('Promise Consumed')
})

new Promise((resolve, reject) => {
    setTimeout (function () { 
        console.log('Task2 completed successfully')
        resolve()
}, 1000)}).then(function(){
        console.log("They're both done");  
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Task3 completed successfully')
        resolve()
    }, 1000) 
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error  = true
        if(!error){
            resolve({username: 'John Doe', password: 'password'})
        }
        else{
            reject('Something went wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(`Welcome ${username}!`);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('All done!')
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error  = true
        if(!error){
            resolve({username: 'John SD', password: 'Bassword'})
        }
        else{
            reject('Something went bonjangaz')
        }
    }, 1000)
})

 async function consumePromiseFive(){
    try{
        const user = await promiseFive
        console.log(user)
    } catch(err){
        console.log("Catched in consumePromiseFive", err)
    }
 }
 consumePromiseFive()


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))


 async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:" , error)
    }
 }
 getAllUsers()


 //study -> promise.all
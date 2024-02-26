const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const newNums = myNums.filter(num => num % 2 === 0)

const newNums = myNums.filter((num) => {
    return num % 2 === 0                   // if not  wriiten "return" then it will return "[]" blank array
})                                         //whenever scope has started in filter we should use return keyword

// console.log(newNums)

// for foreach we have to do like this

const nNums = []

nNums.forEach((num) => {
    if(num % 2 === 0){
        nNums.push(num)
    }
})

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter(book => book.publish > 1980 && book.genre === 'Non-Fiction')

//   console.log(userBooks);

//MAP
//whenever scope has started in map we should use return keyword
// const lNums = myNums.map((num) => num * 2); 

const newNumber = myNums.map((num) => num*2).map((num) => num + 1).filter((num) => num >= 10)

console.log(newNumber);

//reduce

// const myTotal =  myNums.reduce(function(total, num) {
//     console.log(`total:${total} and num:${num}`);
//     return total + num;
// },0)

const myTotal = myNums.reduce((total, num) => total + num, 0);

// console.log(myTotal)

const shoppingcart = [
    { GameName: 'Football', Price: 1000 },
    { GameName: 'Basketball', Price: 2000 },
    { GameName: 'Cricket', Price: 3000 },
    { GameName: 'Baseball', Price: 4000 },
    { GameName: 'hockey', Price: 5000 },
];


const totalPrice = shoppingcart.reduce((total, item) => total + item.Price, 0);

console.log(totalPrice);



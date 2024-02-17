//A shallow copy of an object is a copy whose properties share the same references

//A deep copy of an object is a copy whose properties do not share the same references

const arr = [ 0, 1, 2, 3, 4, 5 ]

console.log(arr[3]);

arr.push(7);
arr.push(9);
arr.pop()

arr.unshift(8)
arr.shift();

console.log(arr.includes(7));
console.log(arr.indexOf(3)); //if some value is missig in array than the index of method will return -1 

// .join will bind the array but it will convert the type into string

// slice doenot manipulate original array but splice manipulate original array.

console.log(arr);
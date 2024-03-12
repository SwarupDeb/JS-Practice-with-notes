const anyNum = (array) =>{
    // 4 Operations
    for (let i = 0; i < array.length; i++){
        if (i===3) return array[i];
    }
};

// Fast Example
const anyNum2 = (array) => {
    // 1 Operation
    return array[3];
  };

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.time("anyNum");
console.log(anyNum(nums));
console.timeEnd("anyNum")

onsole.timeEnd("funnyNumber");

// Types of Time Complexities 👇

// O(1) Time Complexity
function someOperations(n) {
  // 3 Operations => O(1)
  return (n * (n + 5)) / 2;
}

// console.log(someOperations(1000));

// O(n) Time Complexity
function GoingUpDown(n) {
  // 2n + 3 Operations => O(n)
  console.log("Going forward!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End, Going back");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start!");
}

// console.log(GoingUpDown(3));

// O(n^2) Time Complexity
function printBoth(n) {
  // n^2 Operations => O(n^2)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printBoth(4));

/ Space Complexity

// O(1) Space Complexity
const funnyNumber = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

let score = [420, 96, 12, 69, 77];

// console.log(funnyNumber(score));

// O(n) Space Complexity
const funnyNumberArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

// console.log(funnyNumberArray(5));

// Primitive Types ->
// Boolean, num, undefined, null => Constant
// String, arrays, objects => dynamic

// O(n^2) Space Complexity
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

[[1, 2, 3], [], []];

// example usage
const matrix = createMatrix(10);
console.log(matrix);
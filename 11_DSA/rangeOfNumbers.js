// Q5-> create an array with range of numbers

function rangeOfNumbers(startNum, endNum){
    if(startNum>endNum){
        return[];
    }
    return[startNum].concat(rangeOfNumbers(startNum + 1, endNum))
}
console.log(rangeOfNumbers(0,5))

// Q6-> Fibonacci number

function fibonacci(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(15));

// Q6->Reverse a string
function reverseString(str) {
    if (str === "") {
      return "";
    } else return reverseString(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("hello"));

//   Q7 -> Subset (Backtracking algorithm using recursion)
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
function subsets(nums) {
    let result = [];
    let temp = [];

    function recursiveSubsets(nums, i){
        if(i === nums.length){
            return result.push([...temp]);
            
        }
        temp.push(nums[i]);
        recursiveSubsets(nums, i+1);
        temp.pop();
        recursiveSubsets(nums, i+1);
    }
    recursiveSubsets(nums, 0);
    return result;
}
console.log(subsets([1,2,3]));
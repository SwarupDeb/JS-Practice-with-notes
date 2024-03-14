// Q4->Find the subarray with the largest sum and return its sum on a given Integer

//Brute force
function maxSubarraySum(nums) {
     let maxSum = nums[0];
     let startIndex = 0;
     let endIndex = 0;
     
     for(let i = 0; i < nums.length; i++){
        let currSum = 0;
        for(let j = i; j < nums.length; j++){
            currSum = currSum + nums[j];
            if(currSum > maxSum){
                maxSum = currSum;
                startIndex = i;
                endIndex = j;
            }
        }
     }
     return{
        sum: maxSum,
        subarray: nums.slice(startIndex, endIndex+1)
    };
     
}
// Time complexity ->O(n^2)

console.log(maxSubarraySum([1,6,7,8,9,-10,11]))


//Kadane's Algorithm
function maxSubArray(nums){
    let sum = 0;
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum>max){
            max = sum;
        }
        if(sum<0){
            sum = 0;
        }
    }
    return max;
}
// Time complexity ->O(n)
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
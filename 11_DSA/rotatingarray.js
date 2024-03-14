// ``Q2 -> Rotate an array by value of K in a givem array , where K is non negative.

//Brute approach

function rotateArr(nums,k)
{
    let size = nums.length;
    if(k>size){
        k= k%size;
    }
    const rotated = nums.splice(size - k, size);
    nums.unshift(...rotated);
    return nums;
}
console.log(rotateArr([1,2,3,4,5],2)); //Time complexity->O(n)

//optimised approach 

function rotateArrOptimised(nums, k) {
    let size = nums.length;
    if (k > size) {
        k = k % size;
    }
    reverse(nums,0,nums.length -1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length -1);

    return nums;
}

function reverse (nums,left,right){
    while(left<right){
        const temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] = temp
    }
}

console.log(rotateArrOptimised([1, 2, 3, 4, 5, 6, 7, 8, 9],3));
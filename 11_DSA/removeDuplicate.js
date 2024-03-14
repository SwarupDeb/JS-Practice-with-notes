// Q3-> Remove duplicates from an array 

function removeDuplicates(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}
console.log(removeDuplicates([1, 2, 3,4,4,5,4,9,5,8,7,6,9,3,4,5,7,8,9]));

//without splice
function removeDuplicatesNew(nums) {
    if(nums.length === 0) return 0;
    let i = 0;

    for(let j = 1; j < nums.length; j++) {
        if(nums[i]!== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(removeDuplicatesNew([1, 2, 3, 4, 5, 6, 6]))
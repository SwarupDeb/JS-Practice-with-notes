// Q1->Find the second largest number and print it in a given Array.Also first find the unique element in a given array(JavaScript)


//Brute approach
function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr));//o(n)

    uniqueArr.sort((a,b) =>{ //o(nlogn)
        return b-a
    });
    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    }
    else{
        return -1;
    }
}
console.log(secondLargest([10,5,10]))

// Time complexity -> o(nlogn)

//optimised approach

function secondLargestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] !=largest && arr[i] > secondLargest)
        {
            secondLargest = arr[i];
        }
        
    }
    return secondLargest;
}
console.log(secondLargestOptimised([12,25,1,8,62,1,10,63]));

// Time Complexity -> o(n)
//space complexity -> o(1)
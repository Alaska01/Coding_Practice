// Question

// Find The Duplicates
// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport 
// numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your 
// solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

function findDuplicates(arr1, arr2) {
    // your code goes here

    const output = [];

    arr1.forEach(element => {
        if(arr2.includes(element)){
            output.push(element)
        }
    });

    output.sort(function(a, b) {
        return a - b;
    });
    
    return output;
}

findDuplicates([1, 4, 3, 5, 6, 7], [3, 6, 7, 8, 20, 4])
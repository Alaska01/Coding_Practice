/*
Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42]
*/


function arrayOfArrayProducts(arr) {
    // your code goes here

    let output= []
    let newArr = [...arr]
    

    if(arr.length === 1 || arr.length === 0){
        return []
    }

    if( arr.length === 2){
        return arr;
    }

    let multiplier;

    if (arr.length > 2) {
        arr.forEach((element, index) => { 
            let newArrWork= [...newArr];
            newArrWork.splice(index,1)

          output.push(newArrWork.reduce((acc, cur) =>{
                return acc * cur
            }, 1))

         })
    }

    return output;
}

console.log(arrayOfArrayProducts([2, 7, 3, 4]))
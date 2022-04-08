/*
Take the given imput ["[1, 2, 5, 6]", "[5, 2, 8, 11]"]
devide the array into two strings or parts and then sum the numbers in each array

*/


function ArrayChallenge(strArr) { 

  let firstElement = JSON.parse(strArr[0])
  let secondElement =JSON.parse(strArr[1])


  let output = firstElement.map((value, index, arr)=>{
    return (value + secondElement[index])
  })

  return output;

}
   
// keep this function call here 
console.log(ArrayChallenge(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));
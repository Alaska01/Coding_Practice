// /*
// Take the given imput ["[1, 2, 5, 6]", "[5, 2, 8, 11]"]
// devide the array into two strings or parts and then sum the numbers in each array

// */


function ArrayChallenge(strArr) {

  let firstElement = JSON.parse(strArr[0])
  let secondElement = JSON.parse(strArr[1])
  let extra, small, output;
  let result = [];
  //  extra represents the larger array of the two arrays
  if (firstElement.length > secondElement.length) {

    output = secondElement.map((value, index, arr) => {
      return (value + firstElement[index])
    })
    // extra = firstElement;
    small = secondElement.length;
    result = [...output, ...firstElement.slice(small)]
  } else if (firstElement.length < secondElement.length) {
    output = firstElement.map((value, index, arr) => {
      return (value + secondElement[index])
    })
    // extra = secondElement;
    small = firstElement.length;
    result = [...output, ...secondElement.slice(small)]
  } else {
    output = firstElement.map((value, index, arr) => {
      return (value + secondElement[index])
    })
    result = [...output]
  }



  return result.join('-');

}

// keep this function call here 
console.log(ArrayChallenge(["[1, 2, 5, 6, 1,6, 7, 9, 11]", "[5, 2, 8, 11, 8, 9]"]));

//////////////////////////////////////////

// Chinansa Solution

// ////////////////////////////////////////

function ArrayChallenge(strArr) {
  let first = JSON.parse(strArr[0]);
  let second = JSON.parse(strArr[1]);

  let output;
  if (first.length >= second.length) {
    output = first.map((value, index, arr) => {
      if (!second[index]) {
        return value;
      }
      return value + second[index];
    });
  } else {
    output = second.map((value, index, arr) => {
      if (!first[index]) {
        return value;
      }
      return value + first[index];
    });
  }

  return output.join('-');
}

console.log(ArrayChallenge(['[1, 2, 5]', '[5, 2, 8, 9]']));